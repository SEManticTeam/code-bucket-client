'use strict';

const getFormFields = require('../../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const app = require('../../app');

const onCreateChallenge = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.create(data)
  .done(ui.challengeCreated)
  .fail(ui.failure);
};

const onViewUserChallenges = (event) => {
  event.preventDefault();
  api.viewUserChallenges()
  .done(ui.viewChallengesSuccess)
  .fail(ui.failure);
};

const viewChallenges = (event) => {
  event.preventDefault();
  $('.jumbotron').hide();
  $('#contents').empty();
  event.preventDefault();
  api.viewAllChallenges()
  .done(ui.viewChallengesSuccess)
  .fail(ui.failure);
};

const onSelectChallenge = (event) => {
  event.preventDefault();
  let id = $(event.target).parent().data("id");
  let owner = $(event.target).parent().attr("name");
  ui.checkChallengeOwner(owner);

  api.showChallenge(id)
  .done(ui.showChallengeSuccess)
  .then(() => {
    api.showChallengeSubmissions(id)
    .done(ui.appendSubmissionsSuccess)
    .fail(ui.failure);
  })
  .fail(ui.failure);
};

const goToChallenge = (event) => {
  event.preventDefault();
  let id = $(event.target).parent().data("id");
  let owner = null;
  ui.checkChallengeOwner(owner);

  api.showChallenge(id)
  .done(ui.showChallengeSuccess)
  .then(() => {
    api.showChallengeSubmissions(id)
    .done(ui.appendSubmissionsSuccess)
    .fail(ui.failure);
  })
  .fail(ui.failure);
};

const onDeleteChallenge = (event) => {
  event.preventDefault();
  let id = $(event.target).data("id");
  api.deleteChallenge(id)
  .done(ui.deleteChallengeSuccess)
  .then(() => $(event.target).parent().parent().parent().empty())
  .fail(ui.failure);
};

const createSubmission = (event) => {
  event.preventDefault();
$.ajax({
  method: 'POST',
  url: 'http://localhost:3000/submissions',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
  data: new FormData(event.target),
  contentType: false,
  processData: false,
})
.done((data) => { console.log(data);})
.fail((error) => { console.error(error);});
};

const onGradeSubmission = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id = data.submissionId;
  let passfail;
  if(data.passfail === 'pass') {
    passfail = true;
  }
  else {
    passfail = false;
  }
  api.gradeSubmission(passfail, id)
  .done(ui.gradeSubmissionSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#view-challenges').on('click', viewChallenges);
  $('#create-challenge-form').on('submit', onCreateChallenge);
  $(document).on('click','#view-my-challenges', onViewUserChallenges);
  $(document).on('click','#view-all-challenges', viewChallenges);
  $(document).on('click', '.select-challenge', onSelectChallenge);
  $(document).on('click', '.delete-challenge', onDeleteChallenge);
  $(document).on('submit', '#upload-forms', createSubmission);
  $(document).on('submit', '#grade-form', onGradeSubmission);
  $(document).on('click', '#go-to-challenge', goToChallenge);
};

module.exports = {
  onCreateChallenge,
  onViewUserChallenges,
  viewChallenges,
  addHandlers,
  onSelectChallenge,
  onDeleteChallenge,
  createSubmission,
  onGradeSubmission,
  goToChallenge,
};
