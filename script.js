'use strict';
// let inputValue=document.querySelector('.guess').nodeValue;
// console.log(inputValue);

let secretNumber=Math.trunc(Math.random()*20+1);
document.querySelector('.number').innerText="?";
let score=20;
let highScore=0;


document.querySelector('.check').addEventListener('click',function(){
    let inputValue=Number(document.querySelector('.guess').value);
    
    // document.querySelector('.number').innerText=inputValue;

    if(!inputValue){
        document.querySelector('.message').innerText="No number!!"
    }
    else if(inputValue===secretNumber){
        document.querySelector('.message').innerText="correct number guessed!"
        document.querySelector('.number').innerText=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';

        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').innerText=highScore;
        }

    }else if(inputValue>secretNumber){
        if(score>1){
            document.querySelector('.message').innerText="Too high!";
        score--;
        document.querySelector('.score').innerText=score;
        }else{
            document.querySelector('.message').innerText="you loose the game..";
            document.querySelector('.score').innerText=0;
        }
    }
    else if(inputValue<secretNumber){
        if(score>1){
            document.querySelector('.message').innerText="Too low!";
        score--;
        document.querySelector('.score').innerText=score;
        }else{
            document.querySelector('.message').innerText="you loose the game..";
            document.querySelector('.score').innerText=0;
        } 
    }
})

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.message').innerText="Start guessing...";
    document.querySelector('.number').innerText="?";
    document.querySelector('.score').innerText=0;
    // inputValue.innerText=0;
})


