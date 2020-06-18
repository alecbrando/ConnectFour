import Game from './game.js'; 
window.addEventListener("DOMContentLoaded", (event) => {
    // const clickTarget = document.getElementById('click-targets');
    // clickTarget.addEventListener('mouseover', event => {
    //     event.target.classList.add('black');
    // });
    let game;
    const playerOne = document.getElementById('player-one-name');
    const playerTwo = document.getElementById('player-two-name');
    const newButton = document.getElementById('new-game');
    let playerTwoValue; 
    let playerOneValue;
    
    playerOne.addEventListener('keyup', (event) => {
        playerOneValue = playerOne.value;
            if (!playerOneValue) { 
                // console.log('hi')
                newButton.disabled = true;
            }
        if (playerTwoValue && playerOneValue) {
            newButton.disabled = false;
        }
        
                
    });
    playerTwo.addEventListener('keyup', (event) => {
        playerTwoValue = playerTwo.value;
        console.log(playerTwoValue, typeof(playerTwoValue));
        if (!playerTwoValue) { 
            // console.log('hi')
            newButton.disabled = true;
        }
        if (playerTwoValue && playerOneValue) {
            newButton.disabled = false;
        }
        
        
    });

    newButton.addEventListener('click', (event) => {
        game = new Game(playerOneValue, playerTwoValue);
        board.classList.remove('is-invisible');
    });
    


    const board = document.getElementById('board-holder');
    board.classList.add('is-invisible');
});