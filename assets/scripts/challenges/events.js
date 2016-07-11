'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onCreateChallenge = (event) => {
  event.preventDefault();
  let data= getFormFields(event.target);
  api.createChallenge(data)
  .done(ui.challengeCreated)
  .fail(ui.failure);
};


const addHandlers = () => {
  $('#create-challenge-form').on('submit', onCreateChallenge);
};

module.exports = {
  addHandlers,
};
