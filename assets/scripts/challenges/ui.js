'use strict';

const app = require('../app.js');
const api = require('./api.js');

const failure = (error) => {
};

const challengeCreated = (data) => {
  console.log(data);
};

const deleteChallengeSuccess = (data) => {
  console.log(data);
};

module.exports = {
  failure,
  challengeCreated,
  deleteChallengeSuccess,
};
