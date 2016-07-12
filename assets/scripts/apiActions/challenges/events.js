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
  $('#contents').empty();
  $('#my-challenge-info').hide();
  $('#my-challenge-table').hide();
  event.preventDefault();
  api.viewAllChallenges()
  .done(ui.viewAllChallengesSuccess)
  .fail(ui.failure);
};


const onSelectChallenge = (event) => {
  event.preventDefault();
  let data = event.target;
  console.log(data);

  $('.jumbotron').hide();
  $('.my-submissions').hide();
  $('.all-challenges').hide();
  $('#my-challenge-info').hide();
  $('#my-challenge-table').hide();
  $('.item-table').hide();
  $('#my-or-all-challenges-info').hide();
  $('#my-or-all-challenges-table').hide();
  $('#view-my-challenges').hide();
  $('#view-all-challenges').hide();
  $('.single-challenge-view').html('');
  let submitChallengeTemplate = require('../../templates/singleChallenge.handlebars');
  $('.single-challenge-view').html(submitChallengeTemplate(data));
  $('.single-challenge-view').show();
};

const addHandlers = () => {
  $('#view-challenges').on('click', viewChallenges);
  $('#create-challenge-form').on('submit', onCreateChallenge);
  $(document).on('click','#view-my-challenges', onViewUserChallenges);
  $(document).on('click','#view-all-challenges', viewChallenges);
  $(document).on('click', '.select-challenge', onSelectChallenge);
};

module.exports = {
  onCreateChallenge,
  onViewUserChallenges,
  viewChallenges,
  addHandlers,
  onSelectChallenge,
};
