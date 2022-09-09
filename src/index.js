// import { createGame } from './modules/createGame';
import { newScore } from './modules/newScore';
import './style.css';

// createGame();

const submit = document.querySelector('#submit');
const refresh = document.querySelector('#refresh');
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const scores = document.querySelector('#recent_scores');

// Make sure that you saved the ID of your game that will be returned by API.

// You can use this ID to submit and retrieve scores.

// Submit a new score to the API.

submit.addEventListener('click', newScore);

// Retrieve the scores from the API and show them on the page.

/* const getScores = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:OSj9NYlYfZGcy2ZeNLBO/scores/');
    const data = await response.json();
    console.log(data);
    scores.innerHTML = '';
    data.result.forEach((item) => {
        scores.innerHTML += `<li>${item.user}: ${item.score}</li>`;
    });
}; */

// Refresh the scores list when the user clicks on the refresh button.

/* refresh.addEventListener('click', getScores); */

// Refresh the scores list when the page loads.

/* window.addEventListener('load', getScores); */

// Refresh the scores list every 10 seconds.

/* setInterval(getScores, 10000); */

// You can use this function to clear all the scores from the API.

/* const clearScores = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:OSj9NYlYfZGcy2ZeNLBO/scores/', {
        method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
} */