'use strict';

const app = require('../../app.js');
const fileinput = require('../../fileinput.js');
const singleChallenge = require('../../templates/singleChallenge.handlebars');

const multipleChallengesTemplate = require('../../templates/multipleChallenges.handlebars');
const showChallengeTemplate = require('../../templates/showChallenge.handlebars');

const failure = (error) => {
  console.error(error);
};

const success = (data) => {
  console.log(data);
};

const challengeCreated = (data) => {
  console.log(data);
  $('.all-challenges').hide();
  $('.my-submissions').hide();
  $('.jumbotron').hide();
  $('#create-challenge-modal').modal('hide');
  data.challenge.createdAt = data.challenge.createdAt.split('T')[0];
  $('#contents').html(singleChallenge(data));
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
  $('#contents').html(multipleChallengesTemplate(data));
};

const deleteChallengeSuccess = (data) => {
  console.log(data);
};

const showChallengeSuccess = (data) => {
  console.log(data);
  $('.jumbotron').hide();
  $('#contents').empty();
  $('#contents').html(showChallengeTemplate(data));
  $("#fileinput").fileinput();
};

const appendSubmissionsSuccess = (data) => {
  console.log(data);
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
