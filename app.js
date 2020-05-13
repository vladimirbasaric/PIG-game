/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores = [0,0];
let roundScore = 0;
let activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'


document.querySelector('.roll').addEventListener('click', function() {

    // 1. random number
    let dice = Math.floor(Math.random() * 6) + 1;

    // 2. display the result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'img/dice-' + dice + '.png';

    // 3. update the round score IF the rolled number was NOT 1
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        // next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0'; 

        document.querySelector('.player-0').classList.toggle('bg-secondary');
        document.querySelector('.player-1').classList.toggle('bg-secondary');

        document.querySelector('.dice').style.display = 'none';
    }
});

document.querySelector('.hold').addEventListener('click', function() {
    // Add current score to global score

    //Update UI

    // Check if player won the game
    
});