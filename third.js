let firstCard = 0;
let secondCard = 0;

let newCardx=0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum =0;
let cardArray=[];


let messageEl = document.getElementById("message-el");
    let sumEl = document.getElementById("sum-el");
    let cardEl = document.getElementById("cards-el");

    







function submit() {
    firstCard = Math.floor(Math.random() * 11) + 2;
    secondCard = Math.floor(Math.random() * 11) + 2;
    cardArray=[];
    cardArray.push(firstCard);
    cardArray.push(secondCard)
    
  
    
    
console.log(messageEl)


     sum = firstCard + secondCard;


    if (sum < 21) {
        message = "Do you want to draw a new card";
     

    }

    else if (sum === 21) {
        message = "BlackJack!";
        hasBlackJack = true;
    


    }

    else if (sum > 21) {

        message = "you are out of the game!";
    
        isAlive = false;
    }
   
    messageEl.textContent=message;
    cardEl.textContent = "Cards: "+firstCard + " " + secondCard;
    sumEl.textContent = "Sum: "+ sum;
}

function newCard()
{
    let newCardx =  Math.floor(Math.random() * 11) + 2;
    let drawMessaage = "Drawing a new Card from the deck";
    let outputString =""
    cardEl.textContent="";
   
 

     sum +=newCardx;
     console.log("HERE"+cardArray.length)
    
     //cardArray =[firstCard,secondCard];
     cardArray.push(newCardx);

     

     console.log(sum);

     if (sum < 21) {
        drawMessage = "Do you want to draw a new card";
     

    }

    else if (sum === 21) {
        drawMessage = "BlackJack!";
        hasBlackJack = true;
    


    }

    else if (sum > 21) {

        drawMessage = "you are out of the game!";
    
        isAlive = false;
    }

console.log("Drawing a new card from the deck!");
messageEl.textContent= drawMessaage;
sumEl.textContent = "Sum: "+ sum;


for(let i=0;i<cardArray.length;i++)
{

  outputString = outputString+" "+cardArray[i];
}



cardEl.textContent = "Sum : "+ outputString;
messageEl.textContent=drawMessage;



//cardEl.textContent = "Cards: "+cardString;

}