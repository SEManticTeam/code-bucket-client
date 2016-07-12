'use strict';

const app = require('../../app.js');

const create = (data) => {
    return $.ajax({
      url: app.host + '/challenges',
      method: "POST",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: data,
    });
  };

const viewUserChallenges = () => {
  return $.ajax({
    url: app.host + '/user-challenges',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const viewAllChallenges = () => {
  return $.ajax({
    url: app.host + '/challenges',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const deleteChallenge = (id) => {
  return $.ajax({
    url: app.host + '/challenges/' + id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const showChallenge = (challengeId) => {
  console.log('in showChallenge', challengeId);
  return $.ajax({
    url: app.host + '/challenges/' + challengeId,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const showChallengeSubmissions = (challengeId) => {
  console.log('in showChallengeSubmissions', challengeId);

  return $.ajax({
    url: app.host + '/challenge-submissions/' + challengeId,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  create,
  viewUserChallenges,
  viewAllChallenges,
  deleteChallenge,
  showChallenge,
  showChallengeSubmissions,
};
