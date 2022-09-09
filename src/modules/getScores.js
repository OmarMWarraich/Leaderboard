// Retrieve the scores from the API and show them on the page.

const scores = document.querySelector('#recent-scores');

let gamesArray = [];

const renderGames = () => {
  let html = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const game of gamesArray) {
    html += `<li>${game.user}: ${game.score}</li>`;
  }
  if (scores !== null) {
    scores.innerHTML = html;
  }
};

const getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:OSj9NYlYfZGcy2ZeNLBO/scores/');
  const data = await response.json();
  gamesArray = data.result;
  renderGames();
};

export default getScores;