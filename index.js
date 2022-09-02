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

 function getRandomCard () {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    return randomNumber
 }

 console.log(getRandomCard())

let firstCard = getRandomCard();
let secondCard = getRandomCard();
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

cardsEl.textContent = 'Cards: ';
sumEl.textContent = 'Sum: ';

startEl.addEventListener('click', startGame);

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

    cardsEl.textContent = 'Cards: ';

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' ';
    }

    messageEl.textContent = message;
    
    sumEl.textContent = 'Sum: ' + sum;
}



//----------------------------------------------------
let newCardEl = document.getElementById('new-card-btn');

let card;

function newCard() {
    card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}

newCardEl.addEventListener('click', newCard);

//-------------------------------------------

/* for (let i = 1; i < 11; i += 1) {

    console.log(i);

}; */
//----------------------------------------
/* 
let cardsTest = [7, 3, 9];

for (let i = 0; i < cardsTest.length; i++) {
    console.log(cardsTest[i]);
};

let sentence = ['Hello', 'my', 'name', 'is', 'Carlos'];
let greetingEl = document.getElementById('greeting-el');

for (let i = 0; i < sentence.length; i++) {
    if (i < 4) {
        greetingEl.textContent += sentence[i] + ' ';
    }
    else {
        greetingEl.textContent += sentence[i] + '.';
    }
}

greetingEl.textContent.trimEnd
 */

//------------------------------------------------
/* 
let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRace = getFastestRaceTime();

console.log(fastestRace);

function getTotalRaceTime() {
    return player1Time + player2Time
}

let totalTime = getTotalRaceTime();

console.log(totalTime);
 */

//---------------------------------------------------

/* 
function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}

console.log(rollDice())

let flooredNumber = Math.floor(3.45632)

console.log(flooredNumber)
 */