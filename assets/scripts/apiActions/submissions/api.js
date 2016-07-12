'use strict';

const app = require('../app.js');

const createSubmission = (data) => {
    return $.ajax({
      url: app.host + '/submissions',
      method: "POST",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: data,
    });
  };

module.exports = {
  createSubmission,
};
