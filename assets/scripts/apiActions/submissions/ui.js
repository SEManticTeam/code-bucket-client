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
  $('.jumbotron').hide();
  $('#contents').empty();
  $('#contents').html(multipleSubmissionsTemplate(data));
};

const viewAllSubmissionsSuccess = (data) => {
  console.log(data);
  $('.jumbotron').hide();
  $('#contents').empty();
  $('#contents').html(multipleSubmissionsTemplate(data));
};

module.exports = {
  success,
  failure,
  viewUserSubmissionsSuccess,
  viewAllSubmissionsSuccess,
};
