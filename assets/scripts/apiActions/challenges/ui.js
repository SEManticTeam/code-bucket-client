'use strict';

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
  $("#input-ficons-1").fileinput({
    uploadUrl: "/file-upload-batch/2",
    uploadAsync: true,
    showCaption: true,
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
  $('.jumbotron').hide();
  $('#create-challenge-modal').modal('hide');
  $('#contents').html(multipleChallengesTemplate(data));
};

module.exports = {
  failure,
  challengeCreated,
  viewAllChallengesSuccess,
  viewUserChallengesSuccess,
  success,
};
