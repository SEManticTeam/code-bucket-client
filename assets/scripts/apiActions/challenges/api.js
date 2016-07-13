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
  return $.ajax({
    url: app.host + '/challenges/' + challengeId,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const showChallengeSubmissions = (challengeId) => {
  return $.ajax({
    url: app.host + '/challenge-submissions/' + challengeId,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const incrementSubmissionCount = (data) => {
  return $.ajax({
    url: app.host + '/challenges/' + data.challenge._id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      challenge: {
        submissionCount: data.challenge.submissionCount + 1,
      }
    }
  });
};

module.exports = {
  create,
  viewUserChallenges,
  viewAllChallenges,
  deleteChallenge,
  showChallenge,
  showChallengeSubmissions,
  incrementSubmissionCount,
};
