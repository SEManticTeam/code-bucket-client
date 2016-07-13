'use strict';

const app = require('../../app.js');

const viewAllSubmissions = () => {
  return $.ajax({
    url: app.host + '/submissions',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const show = (id) => {
  return $.ajax({
    url: app.host + '/submissions/' + id,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const viewUserSubmissions = () => {
  return $.ajax({
    url: app.host + '/user-submissions',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

// const createSubmission = (data) => {
//     return $.ajax({
//       url: app.host + '/submissions',
//       method: "POST",
//       headers: {
//         Authorization: 'Token token=' + app.user.token,
//       },
//       data: data,
//     });
//   };

  const createSubmission = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/submissions',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
    contentType: false,
    processData: false,
  });
  };

module.exports = {
  viewAllSubmissions,
  show,
  viewUserSubmissions,
  createSubmission,
};
