function pressPlay() {

  const rockChoice = document.getElementById("rockChoice");
  const paperChoice = document.getElementById("paperChoice");
  const scissorsChoice = document.getElementById("scissorsChoice");
  const playerOneChoiceImages = document.getElementById("playerOneChoiceImages");
  const playerOneChoiceResult = document.getElementById("playerOneChoiceResult");
  const playerTwoChoiceImages = document.getElementById("playerTwoChoiceImages");
  const playerTwoChoiceResult = document.getElementById("playerTwoChoiceResult");
  const gameResult = document.getElementById("gameResult");
  // Player One Logic
  let playerOneChoice;

  if (rockChoice.checked) {
    playerOneChoiceResult.textContent = `You Picked Rock!`;
    playerOneChoiceImages.innerHTML = `<img src="../assets/rock.png" alt="rock" width="200">`;

    playerOneChoice = 1;
  } else if (paperChoice.checked) {
    playerOneChoiceResult.textContent = `You Picked Paper!`;
    playerOneChoiceImages.innerHTML = `<img src="../assets/paper.png" alt="paper" width="200">`;

    playerOneChoice = 2;
  } else if (scissorsChoice.checked) {
    playerOneChoiceResult.textContent = `You Picked Scissors!`;
    playerOneChoiceImages.innerHTML = `<img src="../assets/scissors.png" alt="scissors" width="200">`;

    playerOneChoice = 3;
  }

  // Player Two Logic
  let playerTwoChoice = Math.floor(Math.random() * 3) + 1;

  switch(playerTwoChoice) {
    case 1:
      playerTwoChoiceResult.textContent = `Player 2 Picked Rock`;
      playerTwoChoiceImages.innerHTML = `<img src="../assets/rock.png" alt="rock" width="200">`;
      break;

    case 2:
      playerTwoChoiceResult.textContent = `Player 2 Picked Paper`;
      playerTwoChoiceImages.innerHTML = `<img src="../assets/paper.png" alt="paper" width="200">`;
      break; 

    case 3:
      playerTwoChoiceResult.textContent = `Player 2 Picked Scissors`;
      playerTwoChoiceImages.innerHTML = `<img src="../assets/scissors.png" alt="scissors" width="200">`;
      break;

    default:
      break;
  }

  // Tie Logic

  if (playerOneChoice === 1 && playerTwoChoice === 1) {
    gameResult.textContent = "It is a tie!";
  } else if (playerOneChoice === 2 && playerTwoChoice === 2) {
    gameResult.textContent = "It is a tie!";
  } else if (playerOneChoice === 3 && playerTwoChoice === 3) {
    gameResult.textContent = "It is a tie!";
  } 

  // Rock & Scissors
  
    else if (playerOneChoice === 1 && playerTwoChoice === 3) {
    gameResult.textContent = "Player 1 Wins!";
  } else if (playerOneChoice === 3 && playerTwoChoice === 1) {
    gameResult.textContent = "Player 2 Wins!";
  } 
  
  // Rock & Paper
  else if (playerOneChoice === 2 && playerTwoChoice === 1) {
    gameResult.textContent = "Player 1 Wins!";
  } else if (playerOneChoice === 1 && playerTwoChoice === 2) {
    gameResult.textContent = "Player 2 Wins!";
  }

  // Paper & Scissors
  else if (playerOneChoice === 3 && playerTwoChoice === 2) {
    gameResult.textContent = "Player 1 Wins!";
  } else if (playerOneChoice === 2 && playerTwoChoice === 3) {
    gameResult.textContent = "Player 2 Wins!";
  } 

  console.log(`player one = ${playerOneChoice}`);
  console.log(`player two = ${playerTwoChoice}`);
}