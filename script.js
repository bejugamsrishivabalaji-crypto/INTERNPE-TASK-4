const ROWS = 6;
const COLS = 7;

let board = [];
let currentPlayer = 1;
let gameOver = false;
let isPaused = false;

let player1Score = 0;
let player2Score = 0;

const boardElement =
document.getElementById("board");

const statusText =
document.getElementById("status");

const restartBtn =
document.getElementById("restartBtn");

const themeBtn =
document.getElementById("themeBtn");

const pauseBtn =
document.getElementById("pauseBtn");

const player1ScoreText =
document.getElementById("player1Score");

const player2ScoreText =
document.getElementById("player2Score");

const winnerPopup =
document.getElementById("winnerPopup");

const timerText =
document.getElementById("timer");

const blueSound =
document.getElementById("blueSound");

const yellowSound =
document.getElementById("yellowSound");

const winSound =
document.getElementById("winSound");

let timer = 30;
let timerInterval;

createBoard();
startTimer();

/* CREATE BOARD */

function createBoard(){

    board = [];

    boardElement.innerHTML = "";

    for(let row=0; row<ROWS; row++){

        board[row] = [];

        for(let col=0; col<COLS; col++){

            board[row][col] = 0;

            const cell =
            document.createElement("div");

            cell.classList.add("cell");

            cell.dataset.row = row;
            cell.dataset.col = col;

            cell.addEventListener(
            "click",
            ()=>{

                if(!isPaused){

                    handleMove(col);

                }

            });

            boardElement.appendChild(cell);

        }

    }

}

/* HANDLE MOVE */

function handleMove(col){

    if(gameOver || isPaused) return;

    for(let row=ROWS-1; row>=0; row--){

        if(board[row][col] === 0){

            board[row][col] = currentPlayer;

            if(currentPlayer === 1){

                blueSound.play();

            }else{

                yellowSound.play();

            }

            updateBoard();

            if(checkWinner(row,col)){

                gameOver = true;

                winSound.play();

                showWinner();

                if(currentPlayer === 1){

                    player1Score++;

                    player1ScoreText.textContent =
                    player1Score;

                }else{

                    player2Score++;

                    player2ScoreText.textContent =
                    player2Score;

                }

                return;

            }

            if(checkDraw()){

                gameOver = true;

                statusText.textContent =
                "MATCH DRAW";

                return;

            }

            currentPlayer =
            currentPlayer === 1 ? 2 : 1;

            updateStatus();

            resetTimer();

            return;

        }

    }

}

/* UPDATE BOARD */

function updateBoard(){

    const cells =
    document.querySelectorAll(".cell");

    cells.forEach(cell=>{

        const row = cell.dataset.row;
        const col = cell.dataset.col;

        cell.innerHTML = "";

        if(board[row][col] !== 0){

            const disc =
            document.createElement("div");

            disc.classList.add("disc");

            if(board[row][col] === 1){

                disc.classList.add("blue");

            }else{

                disc.classList.add("yellowDisc");

            }

            cell.appendChild(disc);

        }

    });

}

/* STATUS */

function updateStatus(){

    statusText.textContent =
    currentPlayer === 1
    ? "PLAYER 1 TURN"
    : "PLAYER 2 TURN";

}

/* DRAW */

function checkDraw(){

    return board.flat().every(
    cell => cell !== 0);

}

/* WIN CHECK */

function checkWinner(row,col){

    const player = board[row][col];

    const directions = [

        [0,1],
        [1,0],
        [1,1],
        [1,-1]

    ];

    for(let [dx,dy] of directions){

        let count = 1;

        count += countDirection(
        row,col,dx,dy,player);

        count += countDirection(
        row,col,-dx,-dy,player);

        if(count >= 4){

            return true;

        }

    }

    return false;

}

function countDirection(
row,col,dx,dy,player){

    let count = 0;

    let r = row + dx;
    let c = col + dy;

    while(

        r >= 0 &&
        r < ROWS &&
        c >= 0 &&
        c < COLS &&
        board[r][c] === player

    ){

        count++;

        r += dx;
        c += dy;

    }

    return count;

}

/* WINNER */

function showWinner(){

    winnerPopup.style.display =
    "block";

    winnerPopup.textContent =
    `🎉 PLAYER ${currentPlayer} WINS 🎉`;

}

/* TIMER */

function startTimer(){

    clearInterval(timerInterval);

    timer = 30;

    timerText.textContent = timer;

    timerInterval = setInterval(()=>{

        if(!isPaused){

            timer--;

            timerText.textContent = timer;

            if(timer <= 0){

                currentPlayer =
                currentPlayer === 1 ? 2 : 1;

                updateStatus();

                resetTimer();

            }

        }

    },1000);

}

function resetTimer(){

    startTimer();

}

/* BUTTONS */

pauseBtn.addEventListener(
"click",()=>{

    isPaused = !isPaused;

    if(isPaused){

        statusText.textContent =
        "GAME PAUSED";

    }else{

        updateStatus();

    }

});

restartBtn.addEventListener(
"click",()=>{

    gameOver = false;

    currentPlayer = 1;

    winnerPopup.style.display =
    "none";

    updateStatus();

    createBoard();

    resetTimer();

});

/* THEME TOGGLE */

themeBtn.addEventListener(
"click",()=>{

    document.body.classList.toggle(
    "light"
    );

    if(document.body.classList.contains("light")){

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i> Light Mode';

    }else{

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i> Dark Mode';

    }

});

/* GAMING PARALLAX */

document.addEventListener(
"mousemove",
(e)=>{

    const items =
    document.querySelectorAll(
    ".gaming-icon,.cube,.ring"
    );

    items.forEach((item,index)=>{

        const speed =
        (index + 1) * 0.008;

        const x =
        (window.innerWidth / 2 - e.pageX)
        * speed;

        const y =
        (window.innerHeight / 2 - e.pageY)
        * speed;

        item.style.transform =
        `translate(${x}px,${y}px)`;

    });

});