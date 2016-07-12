'use strict';

// const getFormFields = require('../../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onViewUserSubmissions = (event) => {
  event.preventDefault();
  api.viewUserSubmissions()
  .done(ui.viewUserSubmissionsSuccess)
  .fail(ui.failure);
};

const onViewSubmissions = (event) => {
  event.preventDefault();
  console.log('viewing submissions');
  $('.jumbotron').hide();
  $('#contents').empty();
  api.viewAllSubmissions()
  .done(ui.viewAllSubmissionsSuccess)
  .fail(ui.failure);
};

const onSubmitUploadForm = (event) => {
  event.preventDefault();
  let data = new FormData(event.target);
  api.createSubmission(data)
  .done(ui.success)
  .fail(ui.failure)
  ;
};

const addHandlers = () => {
  $('#view-submissions').on('click', onViewSubmissions);
  $('#view-my-submissions').on('click', onViewUserSubmissions);
  $('#view-all-submissions').on('click', onViewSubmissions);
  $(document).on('submit', '#multipart-form-data', onSubmitUploadForm);
};

module.exports = {
  onViewSubmissions,
  onViewUserSubmissions,
  onSubmitUploadForm,
  addHandlers,
};
