/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 30 points on GLOBAL score wins the game

*/

let scores;
let roundScore;
let activePlayer;

// state variable
let gamePlaying;

init();

document.querySelector('.roll').addEventListener('click', function() {
    if(gamePlaying){
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
            nextPlayer();
        }
    }
});

document.querySelector('.hold').addEventListener('click', function() {
    if(gamePlaying) {
        // Add current score to global score
        scores[activePlayer] += roundScore;
    
        //Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        let input = document.querySelector('.final-score').value;
        let winningScore;

        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
    
        // Check if player won the game
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false;
        } else {
            // change the player
            nextPlayer();
        }
    }
});

function nextPlayer() {
     
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0'; 

    document.querySelector('.player-0').classList.toggle('bg-secondary');
    document.querySelector('.player-1').classList.toggle('bg-secondary');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('#name-1').textContent = 'PLAYER 2';

    document.querySelector('.player-0').classList.remove('bg-secondary');
    document.querySelector('.player-1').classList.add('bg-secondary');

}