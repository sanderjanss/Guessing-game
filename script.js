'use strict';

// VARIABLES
let random = Math.floor(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

// DOM ELEMENTS
let messageDOM = document.querySelector('.message');
let numberDOM = document.querySelector('.number');
let scoreDOM = document.querySelector('.score');
let highScoreDOM = document.querySelector('.highscore');
let guessDOM = document.querySelector('.guess');

let displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(guessDOM.value);
    console.log('random = ' + random);
    if(!Number(guess) || guess < 0){
        displayMessage('⛔️ No number!');
    } else if(guess === random){
        displayMessage('🎉 Correct Number!)');
        numberDOM.textContent = random;
        scoreDOM.textContent = score;
        document.querySelector('.check').disabled = true;
        document.body.style.background = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore){
            highScore = score;
            highScoreDOM.textContent = score;
        }
        
    } else if (guess !== random){
        if(score > 1){
            displayMessage(guess > score ? '📈 Too high!' : '📈 Too low!');

        }

        score--;
        scoreDOM.textContent = score;
    } else {
        displayMessage('💥 You lost the game!');
        scoreDOM.textContent = 0;
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    random = Math.floor(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    numberDOM.textContent = '?';
    scoreDOM.textContent = '20';
    guessDOM.value = '';
    document.querySelector('.check').disabled = false;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
})

