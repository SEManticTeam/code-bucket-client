'use strict';

const app = require('../../app.js');
const fileinput = require('../../fileinput.js');
const singleChallenge = require('../../templates/singleChallenge.handlebars');

const multipleChallengesTemplate = require('../../templates/multipleChallenges.handlebars');
const multipleSubmissionsTemplate = require('../../templates/multipleSubmissions.handlebars');
const showChallengeTemplate = require('../../templates/showChallenge.handlebars');

const failure = (error) => {
  console.error(error);
};

const success = (data) => {
  console.log(data);
};

const challengeCreated = (data) => {
  $('.jumbotron').hide();
  $('#create-challenge-modal').modal('hide');
  $('#contents').html(showChallengeTemplate(data));
  $('#set-challengeName').val(data.challenge.name);
  $('.upload-container').show();
  $("#fileinput").fileinput();
};

const viewUserChallengesSuccess = (data) => {
  $('.jumbotron').hide();
  $('#contents').empty();
  $('#contents').html(multipleChallengesTemplate(data));
};

const viewAllChallengesSuccess = (data) => {
  $('.jumbotron').hide();
  $('#contents').empty();
  data.challenges = data.challenges.map((c) => {
    let currentChallenge = c;
    if(currentChallenge._owner === app.user._id){
      currentChallenge.currentUserOwned = true;
    }
    return currentChallenge;
  });
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

const appendSubmissionsSuccess = (data) => {
  data.submissions.forEach((e) => e.createdAt = e.createdAt.split('T')[0]);
  $('#challenge-submission-div').html(multipleSubmissionsTemplate(data));
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
};
