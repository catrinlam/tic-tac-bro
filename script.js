const ticTac = {
    currentPlayer: "X",
    state: ["", "", "", "", "", "", "", "", ""],
    gameOver: false,

    init: function(){
        this.createBoard();
        document.getElementById("reset").addEventListener("click", () => this.resetGame());
    }
}

// create the board
function createBoard(){
createBoard: function(){
    board.innerhtml = '';
    this.state.forEach((_, i) => {
        const cell = document.createElement("div");
        cell.setAttribute(
            "style",
            "width: 100px; height: 100px; border: 1px solid black; display: flex; jusify-content: center; font-size: 3em; cursor: pointer;"
        );
        cell.dataset.index = i;
        board.appendChild(cell);
    });
    board.addEventListener("click", (e) => this.handleClick(e)); // handle clicks on board
    this.uMessage(`Player ${this.currentPlayer}'s turn`);
}





// handle cicks on cells
function handleClick(e){}
handleClick: function(e){}
// check for a win
function checkForWin(){}
checkForWin: function(){}

// highlight the winning cells
function highlight(){
}

// reset the game
function resetGame(){
}

ticTac.init();
