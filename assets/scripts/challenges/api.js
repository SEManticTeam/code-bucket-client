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

module.exports = {
  createChallenge,
};
