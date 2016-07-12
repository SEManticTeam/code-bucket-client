'use strict';

const app = require('../../app.js');
const fileinput = require('../../fileinput.js');

const singleChallenge = require('../../templates/singleChallenge.handlebars');

const multipleChallengesTemplate = require('../../templates/multipleChallenges.handlebars');

const failure = (error) => {
  console.error(error);
};

const success = (data) => {
  console.log(data);
};

const challengeCreated = (data) => {
  $('.all-challenges').hide();
  $('.my-submissions').hide();
  $('.jumbotron').hide();
  $('#create-challenge-modal').modal('hide');
  data.challenge.createdAt = data.challenge.createdAt.split('T')[0];
  $('#contents').html(singleChallenge(data));
  $("#button").fileinput({
    uploadUrl: app.host + "/submissions",
    uploadAsync: true,
    showCaption: true,
    ajaxSettings: {headers: {
        Authorization: 'Token token=' + app.user.token,
      }},
    previewFileIcon: '<i class="fa fa-file"></i>',
    allowedPreviewTypes: ['image', 'html', 'text', 'video', 'audio', 'flash', 'object'],
  });
};

const viewUserChallengesSuccess = (data) => {
  $('.jumbotron').hide();
  $('#contents').empty();
  $('#contents').html(multipleChallengesTemplate(data));
};

const viewAllChallengesSuccess = (data) => {
  console.log(data);
  $('.jumbotron').hide();
  $('#create-challenge-modal').modal('hide');
  $('#contents').html(multipleChallengesTemplate(data));
};

const deleteChallengeSuccess = (data) => {
};

module.exports = {
  failure,
  challengeCreated,
  viewAllChallengesSuccess,
  viewUserChallengesSuccess,
  success,
};
