'use strict';

const app = require('../app.js');

const createChallenge = (data) => {
    return $.ajax({
      url: app.host + '/challenges',
      method: "POST",
      data: data,
    });
  };

module.exports = {
  createChallenge,
}
