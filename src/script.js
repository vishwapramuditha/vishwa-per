let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let totalRounds = 5;

function startGame() {
  const roundsInput = document.getElementById('rounds').value;
  totalRounds = Math.max(5, parseInt(roundsInput));
  document.getElementById('total-rounds').textContent = totalRounds;
  resetGame();
}

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const resultElement = document.getElementById('result');

  
  const playerScoreElement = document.getElementById('player-score');
  const computerScoreElement = document.getElementById('computer-score');

  if (playerChoice === computerChoice) {
    resultElement.textContent = `It's a draw! You both chose ${playerChoice}.`;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    resultElement.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    playerScore++;
    playerScoreElement.classList.add('highlight');
    setTimeout(() => playerScoreElement.classList.remove('highlight'), 300);
  } else {
    resultElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    computerScore++;
    computerScoreElement.classList.add('highlight');
    setTimeout(() => computerScoreElement.classList.remove('highlight'), 300);
  }

  roundsPlayed++;
  updateScoreboard();

  if (playerScore === 3 || computerScore === 3 || roundsPlayed === totalRounds) {
    endGame();
  }
}

function updateScoreboard() {
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('rounds-played').textContent = roundsPlayed;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  document.getElementById('result').textContent = '';
  updateScoreboard();
}

function endGame() {
  const resultElement = document.getElementById('result');
  if (playerScore > computerScore) {
    resultElement.textContent = `Congratulations! You won the game ${playerScore}-${computerScore}.`;
  } else {
    resultElement.textContent = `Game over! You lost the game ${computerScore}-${playerScore}.`;
  }
  disableChoices();
}

function disableChoices() {
  const choices = document.querySelectorAll('.choice img');
  choices.forEach(choice => choice.style.pointerEvents = 'none');
}


function openModal() {
    document.getElementById('instructions-modal').style.display = 'block';
  }
  
  
  function closeModal() {
    document.getElementById('instructions-modal').style.display = 'none';
  }
  
  
  window.onclick = function(event) {
    const modal = document.getElementById('instructions-modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
  