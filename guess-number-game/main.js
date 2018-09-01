/*
*I want you to create a simple guess the number type game.
*It should choose a random number between 1 and 100,
*then challenge the player to guess the number in 10 turns. 
*After each turn the player should be told if they are right or wrong — and,
*if they are wrong, whether the guess was too low or too high.
*It should also tell the player what numbers they previously guessed. 
*The game will end once the player guesses correctly, or once they run out of turns.
 *When the game ends, the player should be given an option to start playing again.
*/

let randomNumber = Math.floor(Math.random() * 10);
const myBtn = document.querySelector('#btn');
let previousGuess = [];
let lastResult = document.querySelector('.lastresult');
let lowOrHi = document.querySelector('.lowOrHi');
let lastGuess = document.querySelector('.lastGuess');
let count = 0;

myBtn.onclick = function () {
    count += 1;
    let currentGuess = _next();
    _compare(+currentGuess);
}
const _next = () => {
    return document.getElementById('user-input').value;
}
const _compare = (currentGuess) => {
    if (currentGuess === randomNumber) {
        lastResult.textContent = 'Congratulation you won';
        lastResult.style.backgroundColor = "green";
    } else if (count === 10) {
        lastResult.textContent = 'Game Over';
        lastResult.style.backgroundColor = 'pink';
    } else {
        lastResult.textContent = 'Wrong';
        lastResult.style.backgroundColor = "red";
        if (currentGuess < randomNumber) {
            previousGuess.push(currentGuess);
            lowOrHi.textContent = 'Last guess was too Low!';
        } else if (currentGuess > randomNumber) {
            previousGuess.push(currentGuess);
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }
    lastGuess.textContent = "Previous guesses: " + previousGuess.join(',');
}

function reset() {
    //TODO: reset action will goes here
}