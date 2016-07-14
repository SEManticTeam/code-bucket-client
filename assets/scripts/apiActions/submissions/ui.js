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

const viewSubmissionsSuccess = (data) => {
  $('.jumbotron').hide();
  $('#contents').empty();
  data.submissions.forEach((e) => e.createdAt = e.createdAt.split('T')[0]);
  $('#contents').html(multipleSubmissionsTemplate(data));
};

const submissionSuccess = (data) => {
  let id = data.submission._challenge;
  $('.fileinput-remove-button').trigger('click');
  $('.upload-container').hide();
  $('#submit-success').html('<h4 style="color:green"><span style="color:green" class="glyphicon glyphicon-folder-open"></span>&nbsp; File successfully submitted!</h5>').delay(1200).fadeOut();
  $('.upload-container').delay(1200).fadeIn();
  challengeApi.showChallenge(id)
  .then((data) => challengeApi.incrementSubmissionCount(data)
    .then(
      challengeApi.showChallengeSubmissions(id)
      .done(challengeUi.appendSubmissionsSuccess)
      .fail(challengeUi.failure)
    )
    .fail(challengeUi.failure)
  )
  .fail(challengeUi.failure);
};

const deleteSubmissionSuccess = (data) => {
  let id = data.responseSubmission._challenge;
  console.log(data.responseSubmission._challenge);
  challengeApi.showChallenge(id)
  .then((data) => challengeApi.decrementSubmissionCount(data))
  .fail(challengeUi.failure);
};

const reloadSubmissions = () => {
  window.setTimeout(() => $('#view-my-submissions').trigger('click'), 1500);
};

const reSubmissionSuccess = () => {
  $('.fileinput-remove-button').trigger('click');
  $('#resubmitModal').modal('hide');
  $('#submit-success').html('<h4 style="color:green; font-weight:300"><span style="color:green" class="glyphicon glyphicon-folder-open"></span>&nbsp; File successfully submitted!</h5>').delay(1400).fadeOut();
  reloadSubmissions();
};

module.exports = {
  success,
  failure,
  viewSubmissionsSuccess,
  submissionSuccess,
  deleteSubmissionSuccess,
  reSubmissionSuccess,
};
