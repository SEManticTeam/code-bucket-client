'use strict';

const app = require('../../app.js');
const fileinput = require('../../fileinput.js');
const singleChallenge = require('../../templates/singleChallenge.handlebars');

const multipleChallengesTemplate = require('../../templates/multipleChallenges.handlebars');
const multipleSubmissionsTemplate = require('../../templates/multipleSubmissions.handlebars');
const challengeSubmissionsTemplate = require('../../templates/challengeSubmissions.handlebars');
const showChallengeTemplate = require('../../templates/showChallenge.handlebars');
const myChallengeSubmissionsTemplate = require('../../templates/myChallengeSubmissions.handlebars');

const events = require('./events');

const failure = (error) => {
  console.error(error);
};

const success = (data) => {
  console.log(data);
};

const challengeCreated = (data) => {
  $('.jumbotron').hide();
  $('#create-challenge-modal').modal('hide');
  events.checkChallengeOwner();
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

const viewChallengesSuccess = (data) => {
  $('.jumbotron').hide();
  $('#contents').empty();
  data.challenges = setDeletePermissions(data);
  data.challenges.sort((a, b) => {
    return a.submissionCount - b.submissionCount;
  }).reverse();
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
  if (app.currentUserChallenge === true){
    data.submissions = setSubmissionPermissions(data);
    data.submissions.forEach((e) => e.createdAt = e.createdAt.split('T')[0]);
    $('#challenge-submission-div').html(myChallengeSubmissionsTemplate(data));
  } else {
    data.submissions = setSubmissionPermissions(data);
    data.submissions.forEach((e) => e.createdAt = e.createdAt.split('T')[0]);
    $('#challenge-submission-div').html(challengeSubmissionsTemplate(data));
  }
};

module.exports = {
  failure,
  challengeCreated,
  viewChallengesSuccess,
  success,
  showChallengeSuccess,
  appendSubmissionsSuccess,
  deleteChallengeSuccess,
  setDeletePermissions,
  setSubmissionPermissions,
};
