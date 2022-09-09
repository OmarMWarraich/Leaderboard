// Create a new game with the name of your choice by using the API.

export const createGame = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
        method: 'POST',
        body: JSON.stringify({
            name: 'My Game',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const data = await response.json();
    console.log(data);
};
