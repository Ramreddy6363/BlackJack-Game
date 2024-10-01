"use strict";
let cards = []
let sum = 0
let blackjack = false;
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEle = document.getElementById("sum-el") 
let cardsEl = document.querySelector("#cards-el")

let player = {
      Name : "Ram",
     Chips : 100

}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips

function getRandomcard(){
    let res = Math.floor(Math.random()*13) + 1;
    if(res === 1){
        return 11
    }else if(res > 10){
        return 10
    }else{
        return res;
        
    }
} 
   function startGame(){
       isAlive = true; 
       let firstCard = getRandomcard();
       let secondCard = getRandomcard();
       cards = [firstCard,secondCard]
       sum = firstCard + secondCard ;
    render()
   }

function render(){
        if (sum <= 20 ){
    message = "Do you want to draw the new card?😊";
}else if(sum === 21){
    message = "Wohoo! you got the blackjack 🥳";
    blackjack = true
}else{
    message = "you're out the game!😒";
    isAlive = false; 
} 
messageEl.textContent = message;
sumEle.textContent = "Sum: " + sum;
cardsEl.textContent = "Cards: "; 
for(let i=0;i<cards.length;i++){
cardsEl.textContent += cards[i] + " "
}
}

function Card(){
    if(isAlive ===true && blackjack === false){
    let card = getRandomcard();
    sum += card;
    cards.push(card);
    console.log(cards);
    render(); 
 }
}