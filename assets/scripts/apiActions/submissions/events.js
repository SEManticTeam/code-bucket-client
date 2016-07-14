'use strict';

const getFormFields = require('../../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const fileinput = require('../../fileinput.js');

const onViewUserSubmissions = (event) => {
  event.preventDefault();
  api.viewUserSubmissions()
  .done(ui.viewSubmissionsSuccess)
  .fail(ui.failure);
};

const onViewSubmissions = (event) => {
  event.preventDefault();
  console.log('viewing submissions');
  $('.jumbotron').hide();
  $('#contents').empty();
  api.viewAllSubmissions()
  .done(ui.viewSubmissionsSuccess)
  .fail(ui.failure);
};

const onSubmitUploadForm = (event) => {
  event.preventDefault();
  let data = new FormData(event.target);
  api.createSubmission(data)
  .done(ui.submissionSuccess)
  .fail(ui.failure)
  ;
};

const onDeleteSubmission = (event) => {
  event.preventDefault();
  let id = $(event.target).parent().data("id");
  api.deleteSubmission(id)
  .done(ui.deleteSubmissionSuccess)
  .then(() => $(event.target).parent().parent().empty())
  .fail(ui.failure);
};

const onResubmit = (event) => {
  event.preventDefault();
  let id = $(event.target).parent().data("id");
  $('#resubmitSubmissionId').val(id);
  $('#resubmitModal').modal('show');
};

const onSubmitReUpload = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id = data.resubmitSubmissionId;
  console.log(id);
  let formData = new FormData(event.target);
  api.reSubmission(formData, id)
  .done(ui.reSubmissionSuccess)
  .fail(ui.failure)
  ;
};


const addHandlers = () => {
  $('#view-submissions').on('click', onViewSubmissions);
  $('#view-my-submissions').on('click', onViewUserSubmissions);
  $('#view-all-submissions').on('click', onViewSubmissions);
  $('#reupload-form').on('submit', onSubmitReUpload);
  $('#fileinput-resubmit').fileinput({
    maxFileSize: 1000,
    allowedFileExtensions: ['js']
  });
  $(document).on('click', '#resubmit', onResubmit);
  $(document).on('submit', '#upload-form', onSubmitUploadForm);
  $(document).on('click', '#delete-submission', onDeleteSubmission);
};

module.exports = {
  onViewSubmissions,
  onViewUserSubmissions,
  onSubmitUploadForm,
  addHandlers,
  onDeleteSubmission,
  onResubmit,
  onSubmitReUpload,
};
