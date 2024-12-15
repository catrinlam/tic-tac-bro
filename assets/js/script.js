/*jshint esversion: 6 */
let currentPlayer = 'X';
const players = ['X', 'O'];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
];
let someoneWon = false;
let scores = { 
    X: 0, 
    O: 0 }; // keep track of scores

resetScores(); // initialize scores to 0

// event listener for reset button
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
    resetGame();
    resetScores(); // reset scores when reset button is clicked
});

createBoard();

const endMessage = document.createElement("h2");
endMessage.textContent = `X's turn!`;
endMessage.style.marginTop = "30px";
endMessage.style.textAlign = "center";
document.getElementById("board").after(endMessage);

let computer = false; // computer mode is off by default

// event listener for computer button and to start computer mode
const computerBtn = document.getElementById("computer");
computerBtn.addEventListener("click", () => {
    resetGame(); // reset board for new game 
    resetScores(); // reset scores
    currentPlayer = 'X';
    endMessage.textContent = `X's turn!`;
    computer = true; // computer mode activated! beep boop!
    console.log("Computer mode activated!");
    computerMove();

    // highlight computer button
    computerBtn.style.backgroundColor = "#60A561";
    computerBtn.style.border = "2px solid #335B34";
    
    twoPlayerBtn.style.backgroundColor = "#F0C293";
    twoPlayerBtn.style.border = "2px solid #e9a35d";
});
// brings back the colour change on hover for computer button
computerBtn.addEventListener("mouseover", () => {
    computerBtn.style.backgroundColor = "#60A561";
    computerBtn.style.border = "2px solid #335B34";
});
computerBtn.addEventListener("mouseout", () => {    
    if (computer) return; // highlight computer button if computer mode is on
    computerBtn.style.backgroundColor = "#F0C293";
    computerBtn.style.border = "2px solid #e9a35d";
});


// event listener for 2 player button and to start 2 player mode
const twoPlayerBtn = document.getElementById("2player");
twoPlayerBtn.addEventListener("click", () => {
    resetGame(); // reset board for new game
    resetScores(); // reset scores
    currentPlayer = 'X';
    endMessage.textContent = `X's turn!`;
    computer = false;
    console.log("2 player mode activated!");

    // highlight two player button
    computerBtn.style.backgroundColor = "#F0C293";
    computerBtn.style.border = "2px solid #e9a35d";

    twoPlayerBtn.style.backgroundColor = "#60A561";
    twoPlayerBtn.style.border = "2px solid #335B34";
    
});

// brings back the colour change on hover for two player button
twoPlayerBtn.addEventListener("mouseover", () => {
    twoPlayerBtn.style.backgroundColor = "#60A561";
    twoPlayerBtn.style.border = "2px solid #335B34";
});
twoPlayerBtn.addEventListener("mouseout", () => {
    if (!computer) return; // highlight two player button if computer mode is off
    twoPlayerBtn.style.backgroundColor = "#F0C293";
    twoPlayerBtn.style.border = "2px solid #e9a35d";
});

// highlight two player button by default
twoPlayerBtn.style.backgroundColor = "#60A561";
twoPlayerBtn.style.border = "2px solid #335B34";

let playerMoved = false; 


/**
 * Function to reset scores
 */
function resetScores(){
    scores = { X: 0, O: 0 };
    updateScores();
}

/**
 * Function for Vs Computer mode
 */
function computerMove() {
    if (someoneWon || !playerMoved) return; // if someone won or player hasn't moved, return

    const cells = document.querySelectorAll(".cell"); 
    const emptyCells = Array.from(cells).filter(cell => cell.textContent === ""); // get empty cells

    if (emptyCells.length === 0) return;  // if no empty cells, return

    // Check if computer can win
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            cells[a].textContent === 'O' &&
            cells[b].textContent === 'O' &&
            cells[c].textContent === ''
        ) {
            // computer wins
            cells[c].textContent = 'O';
            cells[c].style.color = "#A54657"; // Make Os red
            someoneWon = true;
            endMessage.textContent = `Game over! O wins!`;
            scores.O++;
            console.log(`Scores - X: ${scores.X}, O: ${scores.O}`);
            updateScores();
            highlight(combination);
            setTimeout(resetGame, 2000); // auto resets game after 2 seconds
            return;
        }
        if (
            cells[a].textContent === 'O' &&
            cells[b].textContent === '' &&
            cells[c].textContent === 'O'
        ) {
            cells[b].textContent = 'O';
            cells[b].style.color = "#A54657"; // Make Os red
            someoneWon = true;
            endMessage.textContent = `Game over! O wins!`;
            scores.O++;
            console.log(`Scores - X: ${scores.X}, O: ${scores.O}`);
            updateScores();
            highlight(combination);
            setTimeout(resetGame, 2000); // auto resets game after 2 seconds
            return;
        }
        if (
            cells[a].textContent === '' &&
            cells[b].textContent === 'O' &&
            cells[c].textContent === 'O'
        ) {
            cells[a].textContent = 'O';
            cells[a].style.color = "#A54657"; // Make Os red
            someoneWon = true;
            endMessage.textContent = `Game over! O wins!`;
            scores.O++;
            console.log(`Scores - X: ${scores.X}, O: ${scores.O}`);
            updateScores();
            highlight(combination);
            setTimeout(resetGame, 2000); // auto resets game after 2 seconds
            return;
        }
    }

    // Check if computer needs to block player
    if (Math.random() < 0.7) { // 70% chance to block the player
        for (let combination of winningCombinations) {
            // check if player is about to win
            const [a, b, c] = combination;
            if (
                cells[a].textContent === 'X' &&
                cells[b].textContent === 'X' &&
                cells[c].textContent === ''
            ) {
                // block player
                cells[c].textContent = 'O';
                cells[c].style.color = "#A54657"; // Make Os red
                currentPlayer = 'X';
                endMessage.textContent = `${currentPlayer}'s turn!`;
                return;
            }
            if (
                cells[a].textContent === 'X' &&
                cells[b].textContent === '' &&
                cells[c].textContent === 'X'
            ) {
                cells[b].textContent = 'O';
                cells[b].style.color = "#A54657"; // Make Os red
                currentPlayer = 'X';
                endMessage.textContent = `${currentPlayer}'s turn!`;
                return;
            }
            if (
                cells[a].textContent === '' &&
                cells[b].textContent === 'X' &&
                cells[c].textContent === 'X'
            ) {
                cells[a].textContent = 'O';
                cells[a].style.color = "#A54657"; // Make Os red
                currentPlayer = 'X';
                endMessage.textContent = `${currentPlayer}'s turn!`;
                return;
            }
        }
    }

    // Pick a random empty cell if no winning or blocking move
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const cell = emptyCells[randomIndex];
    cell.textContent = 'O'; 
    cell.style.color = "#A54657"; // Make Os red

    // check if computer wins
    if (checkWin('O')) {
        someoneWon = true;
        endMessage.textContent = `Game over! O wins!`;
        scores.O++;
        console.log(`Scores - X: ${scores.X}, O: ${scores.O}`);
        updateScores();
        highlight(combination);
        setTimeout(resetGame, 2000); // auto resets game after 2 seconds
        return;
    }
    // check if game is tied
    if (checkTie()) {
        someoneWon = true;
        endMessage.textContent = "Game is tied!";
        return;
    }
    // switch back to player X
    currentPlayer = 'X';
    endMessage.textContent = `${currentPlayer}'s turn!`;
}

/** 

*Function to create the board

*/
function createBoard() {
    // create table for the board
    let board = document.getElementById("board");
    board.innerHTML = `<table>
        <tr>
            <td class="cell"></td>
            <td class="cell"></td>
            <td class="cell"></td>
        </tr>
        <tr>
            <td class="cell"></td>
            <td class="cell"></td>
            <td class="cell"></td>
        </tr>
        <tr>
            <td class="cell"></td>
            <td class="cell"></td>
            <td class="cell"></td>
        </tr>
    </table>`;
    // add event listener to each cell
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => handleClick(cell, index));
        cell.style.width = "100px";
        cell.style.height = "100px";
        cell.style.textAlign = "center";
        cell.style.verticalAlign = "middle";
        cell.style.fontSize = "24px";
        cell.style.border = "2px solid #221C1B";
    });
}

/** 
* Function to handle clicks on cell
*/
function handleClick(cell, index) {
    if (someoneWon || cell.textContent !== "" || (computer && currentPlayer === 'O')) {
        if (!someoneWon && cell.textContent === "" && computer && currentPlayer === 'O') {
            endMessage.textContent = "Wait for your turn!";
            return; // Do nothing if it's the computer's turn
        }
        endMessage.textContent = "Oi, pick your own square!";
        return;
    }

    cell.textContent = currentPlayer;
    if (currentPlayer === 'X') {
        cell.style.color = "#5B7882"; // Make Xs blue
    }
    if (currentPlayer === 'O') {
        cell.style.color = "#A54657"; // Make Os red
    }
    playerMoved = true;

    if (checkWin(currentPlayer)) {
        someoneWon = true;
        endMessage.textContent = `Game over! ${currentPlayer} wins!`;
        scores[currentPlayer]++; // increment score
        console.log(`Scores - X: ${scores.X}, O: ${scores.O}`);  //log scores in console
        updateScores();
        return;
    }

    if (checkTie()) {
        someoneWon = true;
        endMessage.textContent = "Game is tied!";
        setTimeout(resetGame, 2000); // auto resets game after 2 seconds
        return;
    }

    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    endMessage.textContent = `${currentPlayer}'s turn!`;

    if (computer && currentPlayer === 'O') {
        setTimeout(computerMove, 700); // delay computer move by 700ms
    }
}
/**
 * Function to update scores
 */
function updateScores() {
    const xScoreElement = document.getElementById("xscore");
    const oScoreElement = document.getElementById("oscore");

    xScoreElement.innerHTML = `X  =  ${scores.X}`;
    oScoreElement.innerHTML = `O  =  ${scores.O}`;
}
/**
 * Function to check for win
 */
function checkWin(player) {
    const cells = document.querySelectorAll(".cell");

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        if (
            cells[a].textContent === player &&
            cells[b].textContent === player &&
            cells[c].textContent === player
        ) {
            highlight(combination);
            setTimeout(resetGame, 2000); // auto resets game after 2 seconds
            return true;
        }
        return false;
    });
}

/**
 * Function to highlight winning combination
 */
function highlight(combination) {
    const cells = document.querySelectorAll(".cell");
    combination.forEach(index => {
        cells[index].style.backgroundColor = "#A9EFB8";
    });
}

/**
 * Function to check for tie
 */
function checkTie() {
    const cells = document.querySelectorAll(".cell");
    return Array.from(cells).every(cell => cell.textContent !== "");
}

/**
 * Function to reset game
 */
function resetGame() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.backgroundColor = "#f0f0f0";
    });
    currentPlayer = players[0];
    someoneWon = false;
    playerMoved = false;
    endMessage.textContent = "X's turn!";
}