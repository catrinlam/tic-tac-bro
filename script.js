const ticTac = {
    currentPlayer: "X",
    state: Array(9).fill(null),
    gameOver: false,

    init() {
        this.createBoard();
        document
            .getElementById("reset")
            .addEventListener("click", () => this.reset());
    },


};

// create the board
 function createBoard() {
    const board = document.getElementById("board");
    board.innerHTML = ""; // Clear previous board
    this.state.forEach((_, i) => {
        const cell = document.createElement("div");
        cell.dataset.index = i;
        board.appendChild(cell);
    });
    board.addEventListener("click", (e) => this.handleClick(e)); // Handle clicks on the board
    this.uMessage(`Player ${this.currentPlayer}'s turn`);
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


ticTac.init();
