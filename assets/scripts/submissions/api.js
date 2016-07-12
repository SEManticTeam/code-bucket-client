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

const deleteSubmission = (deleteId) => {
  return $.ajax({
    url: app.host + '/submissions/' + deleteId, // name of id?
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const editSubmission = (submissionId) => {
  return $.ajax({
    url: app.host + '/submissions/' + submissionId,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    // data: getFormFields(event.target)
    data: data,
  });
};

const indexSubmissions = () => {
  return $.ajax({
    url: app.host + '/challenges/',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};



module.exports = {
  createSubmission,
  deleteSubmission,
  indexSubmissions,
};
