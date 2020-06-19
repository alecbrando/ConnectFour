import Game from './game.js'; 
let game;
const board = document.getElementById('board-holder');
if(game == undefined){
    board.classList.add('is-invisible');
}
board.classList.add('is-invisible');

window.addEventListener("DOMContentLoaded", (event) => {
    // const clickTarget = document.getElementById('click-targets');
    // clickTarget.addEventListener('mouseover', event => {
    //     event.target.classList.add('black');
    // });
    
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
        // console.log(playerOne.value, playerTwo.value)
        playerOne.value = '';
        playerTwo.value = '';
        // console.log(playerOne.value, playerTwo.value)
    });
    


   
});