'use strict';

const getFormFields = require('../../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const viewMySubmissions = (event) => {
  event.preventDefault();
  $('.jumbotron').hide();
  $('.single-challenge').hide();
  $('.all-challenges').hide();
  $('#my-challenge-info').hide();
  $('#my-challenge-table').hide();
  $('.my-submissions').show();
};

const addHandlers = () => {
  $('#view-my-submissions').on('click', viewMySubmissions);
};

module.exports = {
  viewMySubmissions,
  addHandlers,
};
