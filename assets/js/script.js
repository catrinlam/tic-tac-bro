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
const computerBtn = document.getElementById("computer");
computerBtn.addEventListener("click", () => {
    resetGame();
    currentPlayer = 'X';
    createBoard();
    endMessage.textContent = `X's turn!`;
    computer = true;
});

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
        return;
    }

    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    endMessage.textContent = `${currentPlayer}'s turn!`;
}

function updateScores() {
    document.getElementById("xscore").innerHTML = `X  =  ${scores.X}</span>`;
    document.getElementById("oscore").innerHTML = `<span>O  =  ${scores.O}</span>`;
    setTimeout(resetGame, 2000); // auto resets game after 2 seconds
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
        cell.style.backgroundColor = "white";
    });
    currentPlayer = players[0];
    someoneWon = false;
    endMessage.textContent = "X's turn!";
}