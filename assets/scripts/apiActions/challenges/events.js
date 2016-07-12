'use strict';

const getFormFields = require('../../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onCreateChallenge = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.create(data)
  .done(ui.challengeCreated)
  .fail(ui.failure);
};

const onViewUserChallenges = (event) => {
  event.preventDefault();
  api.viewUserChallenges()
  .done(ui.viewUserChallengesSuccess)
  .fail(ui.failure);
};

const viewChallenges = (event) => {
  event.preventDefault();
  $('.jumbotron').hide();
  $('.single-challenge').hide();
  $('.my-submissions').hide();
  $('.all-challenges').show();
  $('#my-challenge-info').hide();
  $('#my-challenge-table').hide();
};

const addHandlers = () => {
  $('#view-challenges').on('click', viewChallenges);
  $('#create-challenge-form').on('submit', onCreateChallenge);
  $('#view-my-challenges').on('click', onViewUserChallenges);
};

module.exports = {
  onCreateChallenge,
  onViewUserChallenges,
  viewChallenges,
  addHandlers,
};
