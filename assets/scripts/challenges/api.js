'use strict';

const app = require('../app.js');

const createChallenge = (data) => {
    return $.ajax({
      url: app.host + '/challenges',
      method: "POST",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: data,
    });
  };

const deleteChallenge = (deleteId) => {
  return $.ajax({
    url: app.host + '/challenges/' + deleteId, // name of id?
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const indexChallenges = () => {
  return $.ajax({
    url: app.host + '/challenges/',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};



module.exports = {
  createChallenge,
  deleteChallenge,
  indexChallenges,
};
