/*-------------------------------- Constants --------------------------------*/
const choices = ['X','O']
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [6,7,8],
]


/*---------------------------- Variables (state) ----------------------------*/
let board = ['','','','','','','','',''];
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
const resetBtnEl = document.getElementById('reset');
/*-------------------------------- Functions --------------------------------*/
const init = () => {
    board = ['','','','','','','','',''];
    turn = 'X';
    winner = false;
    tie = false;
    updateBoard();
    render();
}

const render = () => {
    updateBoard();
    updateMessage();
}

const updateBoard = () => {
    board.forEach((value, index) => {
        squareEls[index].textContent = value;
    });
}

const updateMessage = () => {
    if (winner === false && tie === false) {
        messageEl.textContent = `It is ${turn} turn!`;
    } else if (winner === false && tie === true) {
        messageEl.textContent = `It is a tie!`;
    } else {
        messageEl.textContent = `You won!`;
    }
    }

const handleClick = (event) => {
    const index = parseInt(event.target.id);
    placePiece(index);
    checkforWinner();
    checkForTie();
    switchPlayerTurn();
    render();
};//Step 6A
    
const placePiece = (index) =>{ //6.1 A
    if (board[index] === '') {
        board[index] = turn;
    }
}

const checkforWinner = () => {//6.2 made my brain explode
    for (let combo of winningCombos) {
        const [sqr1,sqr2,sqr3] = combo;
        const value1 = board[sqr1];
        const value2 = board[sqr2];
        const value3 = board[sqr3];
        if (value1 != '' && value1 === value2 && value1 === value3){
            winner = true;
        }
    }
}

const checkForTie = (index) => {//6.3
    if (winner === true) {
        return;
    } else if (board[index] === '') {
        tie === false;
    } else {
        tie === true;
    }
    }

const switchPlayerTurn = () => {//6.4 stuck... problem child
    if (winner === true) {
        return;
    } else {
        if (turn === 'X') {
            turn = 'O';
        } else if (turn === 'O') {
            turn = 'X';
        }
    }
};

/*----------------------------- Event Listeners -----------------------------*/

// document.getElementById([0]).addEventListener('click', handleClick);

squareEls.forEach((squareEl) => {
    squareEl.addEventListener('click', handleClick)//6 Level up Option 1
});

// const squareIndex = (handleClick.target.id); //doesn't work

const squareIndex = (event) => {
    let board = event.target.id
 if (board.squareIndex === 'X' || board.squareIndex === 'O') {
    return handleClick;
 } else if (winner === true) {
    return handleClick;
 }
}

resetBtnEl.addEventListener('click', init)//7 simple, i think??

init();






//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
