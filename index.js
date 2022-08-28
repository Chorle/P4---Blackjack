/* ---------------------------------
let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""

if (sum < 21) {
    message = 'Do you want to draw a new card?';
} else if (sum === 21) {
    message = "Wohoo! you've got Blackjack!";
    hasBlackJack = true;
} else {
    message = "You're out of the game!";
    isAlive = false;
}

console.log(message);

console.log(hasBlackJack, isAlive);
 --------------------------------------- */

/* -------------------------------------
let age = 100;

if (age < 100) {
    console.log('Not elegible');
} else if (age === 100) {
    console.log('Here is your birthday card from the King!');
} else {
    console.log('Not elegible, you have already gotten one');
}
 ------------------------------------- */

 let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""
let cards = [firstCard, secondCard];


//----------------------------------------------------
let startEl = document.getElementById('start-btn');
let messageEl = document.getElementById('message-el');
let cardsEl = document.getElementById('cards-el');
let sumEl = document.getElementById('sum-el');

cardsEl.textContent = 'Cards: ' + cards[0] + ', ' + cards[1];
sumEl.textContent = 'Sum: ' + sum;

function startGame() {
    renderGame();
}

function renderGame() {
    if (sum < 21) {
        message = 'Do you want to draw a new card?';
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

startEl.addEventListener('click', startGame);

//----------------------------------------------------
let newCardEl = document.getElementById('new-card-btn');

let card;

function newCard() {
    console.log('Drawing a new card from the deck');
    card = 7;
    sum += card;
    sumEl.textContent = 'Sum: ' + sum;
    cardsEl.textContent += ', ' + card;
    renderGame();
}

newCardEl.addEventListener('click', newCard);