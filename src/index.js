// import { createGame } from './modules/createGame';
import { newScore } from './modules/newScore';
import { getScores } from './modules/getScores';
import './style.css';

// createGame();

const submit = document.querySelector('#submit');
const refresh = document.querySelector('#refresh');

// Submit a new score to the API.

submit.addEventListener('click', newScore);

// Refresh the scores list.

refresh.addEventListener('click', getScores);

// Refresh the scores list when the page loads.

window.addEventListener('load', getScores);



