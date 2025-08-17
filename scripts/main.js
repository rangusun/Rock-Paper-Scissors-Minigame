function RPSChoice(type, strength, weakness) {
    this.type = type;
    this.strongAgainst = strength;
    this.weakAgainst = weakness;
}

const rock = new RPSChoice('rock', 'scissors', 'paper');
const scissors = new RPSChoice('scissors', 'paper', 'rock');
const paper = new RPSChoice('paper', 'rock', 'scissors');

let playerScore = 0;

function showResults(playerChoice) {
    // Get necessary HTML elements
    let decisionContainer = document.getElementById("decisionContainer");
    let resultContainer = document.getElementById("resultContainer");

    let playerChoiceImage = document.getElementById("playerResultIcon");
    let computerChoiceImage = document.getElementById("computerResultIcon");

    let resultDisplayText = document.getElementById("resultText");

    let scoreDisplay = document.getElementById("score");

    // Display icon for player's choice
    if (playerChoice.type == 'rock') {
        playerChoiceImage.src = "images/icon-rock.svg";
    } else if (playerChoice.type == 'scissors') {
        playerChoiceImage.src = "images/icon-scissors.svg";
    } else if (playerChoice.type == 'paper') {
        playerChoiceImage.src = "images/icon-paper.svg";
    }

    // Have computer randomly pick option; default to 'paper'
    let computerChoice = paper;
    computerChoice = computerRPSPick();

    // Display icon for computer's choice
    if (computerChoice.type == 'rock') {
        computerChoiceImage.src = "images/icon-rock.svg";
    } else if (computerChoice.type == 'scissors') {
        computerChoiceImage.src = "images/icon-scissors.svg";
    } else if (computerChoice.type == 'paper') {
        computerChoiceImage.src = "images/icon-paper.svg";
    }

    // Display the result in a text based on player and computer choices
    let result = compareChoices(playerChoice, computerChoice);
    resultDisplayText.innerText = "YOU " + result;

    scoreDisplay.innerText = playerScore;

    // Hide RPS option
    decisionContainer.style.display = "none";

    // Show "Results" screen
    resultContainer.style.display = "flex";
    resultContainer.style.justifyContent = "center";
}

function computerRPSPick() {
    const randomPick = Math.floor(Math.random() * 3);
    let computerChoice = paper;

    switch (randomPick) {
        case 0:
            computerChoice = rock;
            break;
        case 1:
            computerChoice = paper;
            break;
        case 2:
            computerChoice = scissors;
            break;
    }

    return computerChoice;
}

function compareChoices(playerPick, computerChoice) {
    if (playerPick.type == computerChoice.type) {
        return "TIE";
    } else if (playerPick.strongAgainst == computerChoice.type) {
        playerScore += 1;
        return "WIN";
    } else if (playerPick.weakAgainst == computerChoice.type) {
        if (playerScore != 0) {
            playerScore -= 1;
        }
        return "LOSE";
    }
}

function playAgain() {
    let decisionContainer = document.getElementById("decisionContainer");
    let resultContainer = document.getElementById("resultContainer");

    decisionContainer.style.display = "contents";
    resultContainer.style.display = "none";
}