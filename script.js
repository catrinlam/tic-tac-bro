var winners = new Array();
var player1Selections = new Array();
var player2Selections = new Array();
var currentPlayer = 0;
var points1 = 0;    // player 1 points
var points2 = 0;    // player 2 points
var size = 3;

createBoard();


// create the board
 function createBoard() {
    let board = document.getElementById("board");
    let grid = board.innerHTML = `<table>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr >
  <tr>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
</table > `;
    
};








// handle cicks on cells
function handleClick(e){
}

// check for a win
function checkForWin(){
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
    return wins.find((combo) =>
        combo.every((i) => this.state[i] === this.currentPlayer)
    );
}


// highlight the winning cells
function highlight(){
}

// reset the game
function resetGame(){
}

