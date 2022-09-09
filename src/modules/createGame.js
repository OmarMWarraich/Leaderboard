// Create a new game with the name of your choice by using the API.

const createGame = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'My Game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  // eslint-disable-next-line no-unused-vars
  const data = await response.json();
};

export default createGame;