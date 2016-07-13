'use strict';

// const app = require('../app.js');
const challengeApi = require('../challenges/api.js');
const challengeUi = require('../challenges/ui.js');

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
  data.submissions.forEach((e) => e.createdAt = e.createdAt.split('T')[0]);
  $('#contents').html(multipleSubmissionsTemplate(data));
};

const viewAllSubmissionsSuccess = (data) => {
  console.log(data);
  $('.jumbotron').hide();
  $('#contents').empty();
  data.submissions.forEach((e) => e.createdAt = e.createdAt.split('T')[0]);
  $('#contents').html(multipleSubmissionsTemplate(data));
};

const submissionSuccess = (data) => {
  let id = data.upload._challenge;
  $('.upload-container').hide();
  $('#submit-success').html('<h4 style="color:green"><span style="color:green" class="glyphicon glyphicon-folder-open"></span>&nbsp; File successfully submitted!</h5>').delay(1200).fadeOut();
  challengeApi.showChallengeSubmissions(id)
  .done(challengeUi.appendSubmissionsSuccess)
  .fail(failure);
};

module.exports = {
  success,
  failure,
  viewUserSubmissionsSuccess,
  viewAllSubmissionsSuccess,
  submissionSuccess,
};
