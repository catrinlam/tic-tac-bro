let winners = new Array();
let player1Selections = new Array();
let player2Selections = new Array();
let currentPlayer = 0;
let playerOne = 1
let playerTwo = 0
let points1 = 0;    // player 1 points
let points2 = 0;    // player 2 points



resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetGame);
createBoard();


/*
Function to create the board
*/
function createBoard() {
    let board = document.getElementById("board");
    let grid = board.innerHTML = `<table>
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
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("click", handleClick);
        cell.style.width = "100px";
        cell.style.height = "100px";
        cell.style.textAlign = "center";
        cell.style.verticalAlign = "middle";
        cell.style.fontSize = "24px";
        cell.style.border = "1px solid black"; // Added border to cells
    });
};

/*
Function to handle clicks on cells
*/
function handleClick(e){
    checkForWin();
    if (e.target.innerHTML === "") {
        e.target.innerHTML = currentPlayer === 0 ? `<i class="fa-solid fa-x"></i>` : `<i class="fa-solid fa-o"></i>`;
        currentPlayer = 1 - currentPlayer;
        
    } else {
        alert("Oi pick your own square!");
    }
    console.log(currentPlayer);
}

// check for a win
function checkForWin(){
    const cells = document.querySelectorAll(".cell");
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // Rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // Columns
        [0, 4, 8],
        [2, 4, 6], // Diagonals
    ];
    let winner = false;
    if (winner === false) {
        wins.forEach((win) => {
            const [a, b, c] = win;
            if (cells[a].innerHTML !== "" && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
                winner = true;
                console.log("winner");
                highlight();
                if (currentPlayer === 1) {
                    console.log("Player 1 wins");
                }
            } 
        });
    }
}

// highlight the winning cells
function highlight(){
}

// reset the game
function resetGame(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.innerHTML = "";
    });
    console.log("resetting game");
    
}

