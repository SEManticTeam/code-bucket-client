'use strict';

const getFormFields = require('../../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onViewUserSubmissions = (event) => {
  event.preventDefault();
  api.viewUserSubmissions()
  .done(ui.viewUserSubmissionsSuccess)
  .fail(ui.failure);
};

const onViewAllSubmissions = (event) => {
  event.preventDefault();
  api.viewAllSubmissions()
  .done(ui.viewAllSubmissionsSuccess)
  .fail(ui.failure);
};

const onViewSubmissions = (event) => {
  event.preventDefault();
  $('.jumbotron').hide();
  $('.single-challenge').hide();
  $('.all-challenges').hide();
  $('#my-challenge-info').hide();
  $('#my-challenge-table').hide();
  $('.my-submissions').show();
  $('#view-all-submissions').click();
};

const addHandlers = () => {
  $('#view-submissions').on('click', onViewSubmissions);
  $('#view-my-submissions').on('click', onViewUserSubmissions);
  $('#view-all-submissions').on('click', onViewAllSubmissions);

};

module.exports = {
  onViewSubmissions,
  onViewUserSubmissions,
  onViewAllSubmissions,
  addHandlers,
};
