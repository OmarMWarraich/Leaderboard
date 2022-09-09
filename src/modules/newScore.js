const name = document.querySelector('#name');
const score = document.querySelector('#score');

export const newScore = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:OSj9NYlYfZGcy2ZeNLBO/scores/', {
        method: 'POST',
        body: JSON.stringify({
            user: name.value,
            score: score.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const data = await response.json();
    console.log(data);

    name.value = '';
    score.value = '';
};