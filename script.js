// DOM elements
const choices = document.querySelectorAll('.choice');
const message = document.getElementById('message');
const computerChoiceDisplay = document.getElementById('computer-choice');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const winnerDisplay = document.getElementById('winner');
const resetButton = document.getElementById('reset-button'); 

// Game variables
let playerScore = 0;
let computerScore = 0;

// Computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

// Update the scoreboard
function updateScore(winner) {
    if (winner === 'You win!') {
        playerScore++;
    } else if (winner === 'Computer wins!') {
        computerScore++;
    }
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

// Display the game result
function displayResult(playerChoice, computerChoice, winner) {
    computerChoiceDisplay.textContent = `Computer chose ${computerChoice}`;
    message.textContent = winner;
    winnerDisplay.textContent = winner; // Add this line to display the winner
    updateScore(winner);
}


// Event listeners for player's choice and reset button.
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.id;
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);
        displayResult(playerChoice, computerChoice, winner);
    });
});

resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    message.textContent = 'Choose your move!';
    computerChoiceDisplay.textContent = '';
    winnerDisplay.textContent = '';
});
