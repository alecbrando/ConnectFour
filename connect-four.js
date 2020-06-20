import Game from './game.js';
import Column from './column.js'; 
let game;
const board = document.getElementById('board-holder');

function updateUI(){
    

    if (game === undefined) {
        board.classList.add('is-invisible');
    }

    const gameName = document.getElementById('game-name');
    gameName.innerHTML = game.getName();
    const clickTarget = document.getElementById('click-targets');

        let currentPlayer = game.getCurrentPlayer();
        if (currentPlayer === 1) {
            clickTarget.classList.remove('red');
            clickTarget.classList.add('black');
        } else if (currentPlayer === 2) {
            clickTarget.classList.add('red');
            clickTarget.classList.remove('black');
        }

        for (let i = 0; i <= 6; i++) {
            let isFull = game.isColumnFull(i);
            let currentColumn = `column-${i}`;
            let column = document.getElementById(currentColumn);
            if (isFull) {
                column.classList.add('full');
            } else {
                column.classList.remove('full');
            }
        }

        for (let i = 0; i <= 5; i++) {
            let row = i;
            for (let j = 0; j <= 6; j++) {
                let column = j;
                let square = document.querySelector(`#square-${row}-${column}`);
                //console.log(square);
                square.innerHTML = '';
                let playerNumber = game.getTokenAt(column, row);
                
                if (playerNumber === 1) {
                    let token = document.createElement('div');
                    // token.classList.add('token');
                    token.classList.add('token')
                    token.classList.add('black')
                    square.appendChild(token);
                } else if (playerNumber === 2) {
                    let token = document.createElement('div');
                    token.classList.add('token')
                    token.classList.add('red');
                    square.appendChild(token);
                }
            }            
        }

};

window.addEventListener("DOMContentLoaded", (event) => {
    // const clickTarget = document.getElementById('click-targets');
    // clickTarget.addEventListener('mouseover', event => {
    //     event.target.classList.add('black');
    // });

    board.classList.add('is-invisible');
    const playerOne = document.getElementById('player-one-name');
    const playerTwo = document.getElementById('player-two-name');
    const newButton = document.getElementById('new-game');
    let playerTwoValue; 
    let playerOneValue;
    
    function inputFieldNames(){
        playerOneValue = playerOne.value;
        playerTwoValue = playerTwo.value;

        if (!playerTwoValue) {
            newButton.disabled = true;
        }
        if (playerTwoValue && playerOneValue) {
            newButton.disabled = false;
        }

    }

    playerOne.addEventListener('keyup', (event) => {
        inputFieldNames();
    });
    playerTwo.addEventListener('keyup', (event) => {
        inputFieldNames();
    });

    newButton.addEventListener('click', (event) => {
        game = new Game(playerOneValue, playerTwoValue);
        board.classList.remove('is-invisible');
        playerOne.value = '';
        playerTwo.value = '';
        updateUI();
    });
    const test = new Column;
    // console.log(test.getTokenAt(3));
    document.getElementById('click-targets').addEventListener('click', event => {
        let tempId = event.target.id;
        let tempArr = tempId.split('-');
        let columnNum = Number(tempArr[1]);
        // console.log(columnNum);
        game.playInColumn(columnNum);

        updateUI();
    })

   
});