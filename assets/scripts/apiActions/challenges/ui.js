'use strict';

const app = require('../../app.js');
const fileinput = require('../../fileinput.js');
const singleChallenge = require('../../templates/singleChallenge.handlebars');

const multipleChallengesTemplate = require('../../templates/multipleChallenges.handlebars');
const multipleSubmissionsTemplate = require('../../templates/multipleSubmissions.handlebars');
const challengeSubmissionsTemplate = require('../../templates/challengeSubmissions.handlebars');
const showChallengeTemplate = require('../../templates/showChallenge.handlebars');

const failure = (error) => {
  console.error(error);
};

const success = (data) => {
  console.log(data);
};

const challengeCreated = (data) => {
  console.log(data.challenge);
  $('.jumbotron').hide();
  $('#create-challenge-modal').modal('hide');
  $('#contents').html(showChallengeTemplate(data));
  $('#set-challengeName').val(data.challenge.name);
  $('.upload-container').show();
  $("#fileinput").fileinput();
};

const setDeletePermissions = (challengeData) => {
  let challengeArray = challengeData.challenges;
  challengeArray = challengeArray.map((c) => {
    let currentChallenge = c;
    if(currentChallenge._owner === app.user._id){
      currentChallenge.currentUserOwned = true;
    }
    return currentChallenge;
  });
  return challengeArray;
};

const viewUserChallengesSuccess = (data) => {
  $('.jumbotron').hide();
  $('#contents').empty();
  console.log(data.challenges);
  data.challenges = setDeletePermissions(data);
  console.log(data.challenges);
  $('#contents').html(multipleChallengesTemplate(data));
};

const viewAllChallengesSuccess = (data) => {
  $('.jumbotron').hide();
  $('#contents').empty();
  data.challenges = setDeletePermissions(data);
  $('#contents').html(multipleChallengesTemplate(data));
};

const deleteChallengeSuccess = (data) => {
  console.log(data);
};

const showChallengeSuccess = (data) => {
  $('.jumbotron').hide();
  $('#contents').empty();
  $('#contents').html(showChallengeTemplate(data));
  $('#set-challengeName').val(data.challenge.name);
  $('.upload-container').show();
  $("#fileinput").fileinput();
};

const setSubmissionPermissions = (submissionData) => {
  let submissionArray = submissionData.submissions;
  submissionArray = submissionArray.map((s) => {
    let currentSubmission = s;
    if(currentSubmission._owner === app.user._id){
      currentSubmission.currentUserOwned = true;
    }
    return currentSubmission;
  });
  return submissionArray;
};

const appendSubmissionsSuccess = (data) => {
  data.submissions = setSubmissionPermissions(data);
  data.submissions.forEach((e) => e.createdAt = e.createdAt.split('T')[0]);
  $('#challenge-submission-div').html(challengeSubmissionsTemplate(data));
};

module.exports = {
  failure,
  challengeCreated,
  viewAllChallengesSuccess,
  viewUserChallengesSuccess,
  success,
  showChallengeSuccess,
  appendSubmissionsSuccess,
  deleteChallengeSuccess,
  setDeletePermissions,
  setSubmissionPermissions,
};
