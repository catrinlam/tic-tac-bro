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

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetGame);
createBoard();

const endMessage = document.createElement("h2");
endMessage.textContent = `X's turn!`;
endMessage.style.marginTop = "30px";
endMessage.style.textAlign = "center";
document.getElementById("board").after(endMessage);

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

function handleClick(cell, index) {
    if (someoneWon || cell.textContent !== "") return;

    cell.textContent = currentPlayer;

    if (checkWin(currentPlayer)) {
        someoneWon = true;
        endMessage.textContent = `Game over! ${currentPlayer} wins!`;
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
