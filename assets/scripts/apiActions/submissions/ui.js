'use strict';

// const app = require('../app.js');
// const api = require('./api.js');
//
// const fileInput = require('../fileinput.js');


const multipleSubmissionsTemplate = require('../../templates/multipleSubmissions.handlebars');

const success = (data) => {
  console.log('data in generic success handler: ', data);
};

const failure = (error) => {
  console.error(error);
};

const viewUserSubmissionsSuccess = (data) => {
  $('.my-challenges').hide();
  $('.jumbotron').hide();
  $('.item-table').hide();
  $('#create-challenge-modal').modal('hide');

  $('#my-or-all-submissions-info').html('');
  $('#my-or-all-submissions-info').html(multipleSubmissionsTemplate(data));
  $('#my-or-all-submissions-info').show();
  $('#my-or-all-submissions-table').show();
  $('#view-my-submissions').show();
  $('#view-all-submissions').show();

  $('#view-my-submissions').prop('disabled', true);
  $('#view-all-submissions').prop('disabled', false);
};

const viewAllSubmissionsSuccess = (data) => {
  $('.my-challenges').hide();
  $('.jumbotron').hide();
  $('.item-table').hide();
  $('#create-challenge-modal').modal('hide');

  $('#my-or-all-submissions-info').html('');
  $('#my-or-all-submissions-info').html(multipleSubmissionsTemplate(data));
  $('#my-or-all-submissions-info').show();
  $('#my-or-all-submissions-table').show();
  $('#view-my-submissions').show();
  $('#view-all-submissions').show();

  $('#view-my-submissions').prop('disabled', false);
  $('#view-all-submissions').prop('disabled', true);
};

module.exports = {
  success,
  failure,
  viewUserSubmissionsSuccess,
  viewAllSubmissionsSuccess,
};
