import './styles/main.css';
import './check.png';
import { fetchScores, postScore } from './utilities/networking';
import scoreEl from './components/score';

const addScoreForm = document.querySelector('form');
const userName = document.querySelector('.username');
const scoreInput = document.querySelector('.scoreInput');
const scoreList = document.querySelector('ul');
const submitButton = document.querySelector('.submit-button');
const listLoadingIndicator = document.querySelector('.loading-indicator');
const refreshBtn = document.querySelector('.refresh-btn');
let scoresArr = [];

/// print score
const printScore = () => {
  scoreList.innerHTML = '';
  scoresArr.forEach((score) => {
    scoreList.appendChild(scoreEl(score.user, score.score));
  });
};
///

// add score
const sendScore = async (e) => {
  e.preventDefault();
  if (userName.value.trim().length === 0 || scoreInput.value.trim().length === 0) {
    return alert('No value provided');
  }

  const newScore = {
    user: userName.value,
    score: scoreInput.value,
  };
  submitButton.disabled = true;
  submitButton.classList.add('loading');
  try {
    await postScore(newScore);
    scoresArr.unshift(newScore);
    printScore();
    submitButton.disabled = false;
    submitButton.classList.remove('loading');
  } catch (error) {
    alert('failed to register');
    submitButton.disabled = false;
  }

  return 'xxx';
};
///

// fetch loaded data
const loadData = async () => {
  try {
    const fetch = await fetchScores();
    scoresArr = fetch.result;
    listLoadingIndicator.classList.add('hide');
    printScore();
  } catch (error) {
    listLoadingIndicator.classList.add('hide');
  }
};
//

// refresh
const refresh = async () => {
  refreshBtn.classList.add('loading');
  try {
    const fetch = await fetchScores();
    scoresArr = fetch.result;
    printScore();
    refreshBtn.classList.remove('loading');
  } catch (error) {
    alert('fail to refresh.');
    refreshBtn.classList.remove('loading');
  }
};

addScoreForm.addEventListener('submit', sendScore);
window.addEventListener('load', loadData);
refreshBtn.addEventListener('click', refresh);
