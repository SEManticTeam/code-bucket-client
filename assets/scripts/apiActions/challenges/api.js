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

module.exports = {
  create,
  viewUserChallenges,
};
