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

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

console.log(cards);

let player = {
    name: 'Carlos',
    chips: '145',
    sayHello: function() {
        console.log('Hola!')
    }
}

player.sayHello()

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ': $' + player.chips;

//----------------------------------------------------

let startEl = document.getElementById('start-btn');

cardsEl.textContent = 'Cards: ';
sumEl.textContent = 'Sum: ';

startEl.addEventListener('click', startGame);

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
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
    if (isAlive === true && hasBlackJack === false) {
        card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }
    
}

newCardEl.addEventListener('click', newCard);

function getRandomCard () {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    }
    return randomNumber
 }

 console.log(getRandomCard())

//---------------------FOR LOOPS----------------------

/* 

for (let i = 1; i < 11; i += 1) {
    console.log(i);
}; 

*/

//-----------------------------------------------------

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

//---------------------------MATH FUNCTION------------------------

/* 
function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}

console.log(rollDice())

let flooredNumber = Math.floor(3.45632)

console.log(flooredNumber)
 */

//---------------------------LOGICAL OPERATOR-----------------------------
/* 
let hasCompletedCourse = true;
let givesCertificate = true;

function generateCertificate() {
    console.log('Generating certificate...');
}

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate ();
}

//---------------------------------------------------------

let hasSolvedChallenge = false;
let hasHintsLeft = false;

function showSolution() {
    console.log('Showing the solution...');
}

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution();
}

//---------------------------------------------------------

let likesDocumentaries = true;
let likesStartups = false;

function recommendMovie() {
    console.log('Hey, check out this new film we think you will like!');
}

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie();
}
 */

//-------------------------Objects-----------------------------

/*

let course = {
    title: 'Learn CSS Grid for free',
    lessons: 16,
    creator: 'Carlos Julián Denogens',
    length: 63,
    level: 2,
    isFree: true,
    tags: ['html', 'css']
}

console.log(course.tags);

//------------------------------------------------------

let castle = {
    title: 'Live like a king in my castle',
    price: 190,
    isSuperHost: true,
    image: ['img/castle1.png', 'img/castle2.png']
}

console.log(castle.price);
console.log(castle.isSuperHost);

*/

//------------------------------------------------------

/* 
let person = {
    name: 'Carlos',
    age: 28,
    contry: 'Argentina',
    logData: function() {
        console.log(person.name, 'is', person.age, 'years old and lives in', person.contry);
    }
}

person.logData();
 */

//-----------------------------------------------------

/* 
const passenger = 4

if (passenger < 6) {
    console.log('You have a 100% discount');
} else if (passenger < 18) {
    console.log('You have a 50% discount');
} else if (passenger < 67) {
    console.log('You have no discount');
} else {
    console.log('You have a 30% discount');
}
 */

//----------------------------------------------------

/* 
let largeCountries = ['China', 'India', 'USA', 'Indonesia', 'Pakistan'];

console.log('The largest countries in the world:');

for (let i = 0; i < largeCountries.length; i++) {
    console.log('-', largeCountries[i]);
}
*/

//-----------------------------------------------------

/* 
let largeCountries = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monaco'];

console.log('The largest countries in the world:');

largeCountries.pop();
largeCountries.shift();
largeCountries.push('Pakistan');
largeCountries.unshift('China');


for (let i = 0; i < largeCountries.length; i++) {
    console.log('-', largeCountries[i]);
}
*/

//------------------------------------------------------

/* 
let dayOfMonth = 14;
let weekday = 'Friday';

if ((dayOfMonth === 13) && (weekday === 'Friday')) {
    console.log('😱');
} else {
    console.log('all good');
}
*/

//-----------------------------------------------------

let hands = ['rock', 'paper', 'scissors'];

function rollRPS() {
    let randomRPS = Math.floor( Math.random() * 3 )
    return randomRPS
}

console.log(hands[rollRPS()])