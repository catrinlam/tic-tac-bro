var winners = new Array();
var player1Selections = new Array();
var player2Selections = new Array();
var currentPlayer = 0;
var points1 = 0;    // player 1 points
var points2 = 0;    // player 2 points
var size = 3;




// create the board
 function createBoard() {
         let parent = document.getElementById("board");
         let counter = 1;

         for (let i = 0; i < 3; i++) {
             let row = document.createElement("tr");

             for (let x = 0; x < size; x++) {
                 let col = document.createElement("td");
                 col.innerHTML = counter;

                 row.appendChild(col);
             }
             parent.appendChild(row);
         }
};
createBoard();







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


ticTac.init();
