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

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetGame);
createBoard();

const endMessage = document.createElement("h2");
endMessage.textContent = `X's turn!`;
endMessage.style.marginTop = "30px";
endMessage.style.textAlign = "center";
document.getElementById("board").after(endMessage);

let computer = false;
// event listener for computer button and to start computer mode
const computerBtn = document.getElementById("computer");
computerBtn.addEventListener("click", () => {
    resetGame(); // reset board for new game 
    resetScores(); // reset scores
    currentPlayer = 'X';
    endMessage.textContent = `X's turn!`;
    computer = true;
    console.log("Computer mode activated!");
    computerMove();
});
// event listener for 2 player button and to start 2 player mode
const twoPlayerBtn = document.getElementById("2player");
twoPlayerBtn.addEventListener("click", () => {
    resetGame(); // reset board for new game
    currentPlayer = 'X';
    endMessage.textContent = `X's turn!`;
    computer = false;
    console.log("2 player mode activated!");
});

let playerMoved = false;

function resetScores(){
    scores = { X: 0, O: 0 };
    updateScores();
}

function computerMove() {
    if (someoneWon || !playerMoved) return;

    const cells = document.querySelectorAll(".cell"); 
    const emptyCells = Array.from(cells).filter(cell => cell.textContent === ""); // get empty cells

    if (emptyCells.length === 0) return; 

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const cell = emptyCells[randomIndex]; // pick a random empty cell
    cell.textContent = 'O'; 

    // check if computer wins
    if (checkWin('O')) {
        someoneWon = true;
        endMessage.textContent = `Game over! O wins!`;
        scores.O++;
        console.log(`Scores - X: ${scores.X}, O: ${scores.O}`);
        updateScores();
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

/*

*Function to create the board

*/
function createBoard() {
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
        cell.style.border = "1px solid black";
    });
}

/*

Function to handle clicks on cells

*/
function handleClick(cell, index) {
    if (someoneWon || cell.textContent !== ""){
        endMessage.textContent = "Oi pick your own square!";
        return;
    }

    cell.textContent = currentPlayer;
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

    if (computer) {
        setTimeout(computerMove, 1000); // delay computer move by 1 second
    }
}

function updateScores() {
    document.getElementById("xscore").innerHTML = `X  =  ${scores.X}`;
    document.getElementById("oscore").innerHTML = `O  =  ${scores.O}`;
}

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

function highlight(combination) {
    const cells = document.querySelectorAll(".cell");
    combination.forEach(index => {
        cells[index].style.backgroundColor = "green";
    });
}

function checkTie() {
    const cells = document.querySelectorAll(".cell");
    return Array.from(cells).every(cell => cell.textContent !== "");
}

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