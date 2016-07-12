'use strict';

// const app = require('../app.js');
// const api = require('./api.js');
//
// const fileInput = require('../fileinput.js');

const singleChallenge = require('../../templates/singleChallenge.handlebars');

const success = (data) => {
  console.log('data in generic success handler: ', data);
};

const failure = (error) => {
  console.error(error);
};

const viewUserChallengesSuccess = (data) => {
  console.log('data.challenges from AJAX call: ', data);
  $('.my-submissions').hide();
  $('.jumbotron').hide();
  $('.item-table').hide();
  $('#create-challenge-modal').modal('hide');

  $('#my-challenges-info').html('');
  let myChallengesTemplate = require('../../templates/myChallenges.handlebars');
  $('#my-challenges-info').html(myChallengesTemplate(data));
  $('#my-challenge-info').show();
  $('#my-challenge-table').show();
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
  console.log(data);
};

module.exports = {
  success,
  failure,
  viewUserChallengesSuccess,
  challengeCreated,
};
