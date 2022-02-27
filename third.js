let firstCard = 0;
let secondCard = 0;

let newCardx=0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum =0;
let cardArray = [firstCard,secondCard];







function submit() {
    firstCard = Math.floor(Math.random() * 11) + 2;
    secondCard = Math.floor(Math.random() * 11) + 2;
  
    
    let messageEl = document.getElementById("message-el");
    let sumEl = document.getElementById("sum-el");
    let cardEl = document.getElementById("cards-el");
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
    let messageEl = document.getElementById("message-el");
    let cardEl = document.getElementById("cards-el");
    let sumEl = document.getElementById("sum-el");
    let drawMessaage = "Drawing a new Card from the deck";
   
    let cardString = "";
     newCardx =  Math.floor(Math.random() * 11) + 2;

     sum +=newCardx;
    
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

    cardEl.textContent = cardEl.textContent+ " "+cardArray[i]; 
}




//cardEl.textContent = "Cards: "+cardString;

}