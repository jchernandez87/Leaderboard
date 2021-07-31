/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const userInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const scoreList = document.querySelector('.score-list');
const form = document.querySelector('.form');

const newGame = async () => {
  const response = await fetch(`${apiURL}games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Cool Game' }),
  });
  const data = response.json();
  return data;
};

const newScore = async () => {
  const response = await fetch(`${apiURL}games/lzlEnBNVDpn9MJrnweVk/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: userInput.value,
      score: scoreInput.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = response.json();
  form.reset();
  return data;
};

const getScores = async () => {
  const response = await fetch(`${apiURL}games/lzlEnBNVDpn9MJrnweVk/scores/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  const { result } = data;
  result.forEach((elem) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.textContent = elem.user;
    const score = document.createElement('span');
    score.classList.add('score-text');
    score.textContent = elem.score;
    listItem.appendChild(score);
    scoreList.appendChild(listItem);
  });
};

export { newGame, newScore, getScores };