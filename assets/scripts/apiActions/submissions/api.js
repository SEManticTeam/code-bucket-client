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

  const createSubmission = (data) => {
  return $.ajax({
    method: 'POST',
    url: app.host + '/submissions',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
    contentType: false,
    processData: false,
  });
  };

  const reSubmission = (data, id) => {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/submissions/' + id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
    contentType: false,
    processData: false,
  });
  };

  const deleteSubmission = (id) => {
    return $.ajax({
      url: app.host + '/submissions/' + id,
      method: "DELETE",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });
  };

module.exports = {
  viewAllSubmissions,
  show,
  viewUserSubmissions,
  createSubmission,
  deleteSubmission,
  reSubmission,
};
