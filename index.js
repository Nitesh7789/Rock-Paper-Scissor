const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click",() => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3 ) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSOR";
            break;
    }
}

function checkWinner(){
    if(computer == player){
        return `Draw!!`;
    }
    else if(player == "ROCK"){
        if(computer == "PAPER"){
            return "You Lose :("
        }
        else{
            return "You Win!!";
        }
    }
    else if(player == "PAPER"){
        if(computer == "SCISSOR"){
            return "You Lose :(";
        }
        else{
            return "You Win!!";
        }
    }
    else if(player == "SCISSOR"){
        if(computer == "ROCK"){
            return "You Lose:(";
        }
        else{
            return "You Win!!";
        }
    }
}