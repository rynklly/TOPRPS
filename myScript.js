function computerChoice () {
    let rand = Math.random();
    let num = Math.round(rand*100);
    if (num <= 34) {
        return ("Rock")
    }
    else if (num <= 67) {
        return ("Paper")
    }
    else {
        return ("Scissors")
    }
}

function playerChoice () {
    let playerInput = (prompt("What will you throw?"));
    if (playerInput.toLowerCase() == "rock") {
        return "Rock";
    } else if (playerInput.toLowerCase() == "paper") {
        return "Paper";
    } else if (playerInput.toLowerCase() == "scissors") {
        return "Scissors";
    } else {
        alert("Choose Rock, Paper, or Scissors!");
        return playerChoice();
    }
    
}

function playRound (playerSelection, computerSelection) {
   
    if (playerSelection == "Rock") {
       
        if (computerSelection == "Rock") {
            ++gameCount;
            alert("It's a tie!" + " The score is " + pScore + " - " + cScore + ".");
            return "tie";

        } else if (computerSelection == "Paper") {
            ++gameCount;
            ++cScore;
            alert("You lose, paper covers rock!" + " The score is " + pScore + " - " + cScore + ".");
            return "loss";

        } else if (computerSelection == "Scissors") {
            ++gameCount;
            ++pScore;
            alert("You win! Rock smashes scissors!" + " The score is " + pScore + " - " + cScore + ".");
            return "win";
        }
    } else if (playerSelection == "Paper") {
       
        if (computerSelection == "Paper") {
            ++gameCount;
            alert("It's a tie!" + " The score is " + pScore + " - " + cScore + ".");
            return "tie";

        } else if (computerSelection == "Rock") {
            ++gameCount;
            ++pScore;
            alert("You Win! Paper covers rock!" + " The score is " + pScore + " - " + cScore + ".");
            return "win";

        } else if (computerSelection == "Scissors") {
            ++gameCount;
            ++cScore;
            alert("You lose, scissors cut paper!" + " The score is " + pScore + " - " + cScore + ".");
            return "loss";

        }
    } else if (playerSelection == "Scissors") {
        
        if (computerSelection == "Scissors") {
            ++gameCount;
            alert("It's a tie!" + " The score is " + pScore + " - " + cScore + ".");
            return "tie";

        } else if (computerSelection == "Rock") {
            ++gameCount;
            ++cScore;
            alert("You lose, rock smashes scissors!" + " The score is " + pScore + " - " + cScore + ".");
            return "loss";

        } else if (computerSelection == "Paper") {
            ++gameCount;
            ++pScore;
            alert("You win! Scissors cut paper!" + " The score is " + pScore + " - " + cScore + ".");
            return "win";

        }
}
}
let gameCount = 0;
let pScore = 0;
let cScore = 0;

function game() {
    let result = playRound(playerChoice(), computerChoice());

    if (result == "tie") {  
        if (gameCount >=5) {
            return finalTally();
        } else {
            return game();
        }

    } else if (result == "win") {
        if (gameCount >=5) {
            return finalTally();
        } else {
            return game();
        }
        
    } else {
        if (gameCount >=5) {
            return finalTally();
        } else {
            return game();
        }
    }
}

function finalTally() {
    if (pScore > cScore){
        alert("You win: " + pScore + " - " + cScore + "!")
        return ("You win: " + pScore + " - " + cScore + "!");
    } else if (cScore > pScore) {
        alert("You lose: " + pScore + " - " + cScore + "!")
        return ("You lose: " + pScore + " - " + cScore + "!");
    } else {
        alert("You tied: " + pScore + " - " + cScore + "!")
        return ("You tied: " + pScore + " - " + cScore + "!")
    }
}

const playerSelection = playerChoice();
const computerSelection = computerChoice();

console.log(game(playRound(playerSelection, computerSelection)));