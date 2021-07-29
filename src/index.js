/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import { newScore, getScores } from './modules/getApi.js';

const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');

submitBtn.addEventListener('click', newScore);
refreshBtn.addEventListener('click', getScores);
