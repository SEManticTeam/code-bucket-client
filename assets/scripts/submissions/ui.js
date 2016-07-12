'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const failure = (error) => {
};

const submissionCreatedSuccess = (data) => {
  console.log(data);
};

const deleteSubmissionSuccess = (data) => {
  event.target.parentElement.remove();
};

module.exports = {
  failure,
  submissionCreated,
  deleteSubmissionSuccess,
};
