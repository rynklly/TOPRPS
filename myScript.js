let playerSelection;
let computerSelection;

let gameCount = 0;
let pScore = 0;
let cScore = 0;

const button = document.querySelectorAll('.button');

const pRBtn = document.querySelector('#pRBtn');
const pPBtn = document.querySelector('#pPBtn');
const pSBtn = document.querySelector('#pSBtn');

const cRBtn = document.querySelector('#cRBtn');
const cPBtn = document.querySelector('#cPBtn');
const cSBtn = document.querySelector('#cSBtn');

const gameAlert = document.querySelector('#gameAlert');

const pScoreBoard = document.querySelector('#pScoreBoard');
const cScoreBoard = document.querySelector('#cScoreBoard');



function computerChoice () {
    let rand = Math.random();
    let num = Math.round(rand*100);
    if (num <= 34) {
        cRBtn.classList.add('pressed');
        return ("rock");
    }
    else if (num <= 67) {
        cPBtn.classList.add('pressed');
        return ("paper");
    }
    else {
        cSBtn.classList.add('pressed');
        return ("scissors");
    }
};

function playRound () {

    if (playerSelection == "rock") {
       
        if (computerSelection == "rock") {
            ++gameCount;
            return "It's a tie!";
            

        } else if (computerSelection == "paper") {
            ++gameCount;
            ++cScore;
            return "You lose, paper covers rock!";
            

        } else if (computerSelection == "scissors") {
            ++gameCount;
            ++pScore;
            return "You win! Rock smashes scissors!"
            
        }
    } else if (playerSelection == "paper") {
       
        if (computerSelection == "paper") {
            ++gameCount;
            return "It's a tie!" 


        } else if (computerSelection == "rock") {
            ++gameCount;
            ++pScore;
            return "You Win! Paper covers rock!" 


        } else if (computerSelection == "scissors") {
            ++gameCount;
            ++cScore;
            return "You lose, scissors cut paper!";
            

        }
    } else if (playerSelection == "scissors") {
        
        if (computerSelection == "scissors") {
            ++gameCount;
            return "It's a tie!";


        } else if (computerSelection == "rock") {
            ++gameCount;
            ++cScore;
            return "You lose, rock smashes scissors!";


        } else if (computerSelection == "paper") {
            ++gameCount;
            ++pScore;
            return "You win! Scissors cut paper!";


        }
    }
}


function game() {

    if (pScore >= 5) {
        setTimeout (playerWin(), 1000);
    
    } else if (cScore >= 5) {
        setTimeout(computerWin(), 1000);
    
    }else {
       return playRound(playerSelection, computerSelection);
    }

}

function playerWin() {

    pScoreBoard.classList.add('winningScore');
    gameAlert.textContent += " Congratulations! You won!"

}

function computerWin() {

    cScoreBoard.classList.add('winningScore');
    gameAlert.textContent += " Game over, you lost!"

}


function removeTransition() {

    button.forEach(button => button.classList.remove('pressed'));

}

pRBtn.addEventListener('click', () => {

    pRBtn.classList.add('pressed');
    computerSelection = computerChoice();
    playerSelection = 'rock';
    gameAlert.textContent = (playRound(playerSelection, computerSelection));
    pScoreBoard.textContent = pScore;
    cScoreBoard.textContent = cScore;
    setTimeout(removeTransition, 500);
    if (pScore >= 5) {
        playerWin();
    } else if (cScore >= 5) {
        computerWin();
    }
    

});

pPBtn.addEventListener('click', () => {

    pPBtn.classList.add('pressed');
    computerSelection = computerChoice();
    playerSelection = 'paper';
    gameAlert.textContent = (playRound(playerSelection, computerSelection));
    pScoreBoard.textContent = pScore;
    cScoreBoard.textContent = cScore;
    setTimeout(removeTransition, 500);
    if (pScore >= 5) {
        playerWin();
    } else if (cScore >= 5) {
        computerWin();
    }
        
    
});

pSBtn.addEventListener('click', () => {

    pSBtn.classList.add('pressed');
    computerSelection = computerChoice();
    playerSelection = 'scissors';
    gameAlert.textContent = (playRound(playerSelection, computerSelection));
    pScoreBoard.textContent = pScore;
    cScoreBoard.textContent = cScore;
    setTimeout(removeTransition, 500);
    if (pScore >= 5) {
        playerWin();
    } else if (cScore >= 5) {
        computerWin();
    }       
        
});


    



