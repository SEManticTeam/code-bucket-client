'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onCreateChallenge = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createChallenge(data)
  .done(ui.challengeCreated)
  .fail(ui.failure);
};

const onDeleteChallenge = (event) => {
  event.preventDefault();
  // let deleteId = $(event.target.parentElement).data('id');
  let deleteId = "5783eef038516a8affeeba0c";
  api.deleteChallenge(deleteId)
  .done(ui.deleteChallengeSuccess(event))
  .fail(ui.failure);
};


const addHandlers = () => {
  $('#create-challenge-form').on('submit', onCreateChallenge);
  $('#????').on('submit', onDeleteChallenge);

};

module.exports = {
  addHandlers,
};
