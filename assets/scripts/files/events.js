'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onCreateSubmission = (event) => {
  event.preventDefault();
  let data= getFormFields(event.target);
  api.createSubmission(data)
  .done(ui.submissionCreated)
  .fail(ui.failure);
};

const onDeleteSubmission = (event) => {
  event.preventDefault();
  let deleteId = $(event.target.parentElement).data('id');
  api.deleteItem(deleteId)
  .done(ui.deleteSubmissionSuccess(event))
  .fail(ui.failure);
};


const addHandlers = () => {
  $('#????').on('submit', onCreateSubmission);
};

module.exports = {
  addHandlers,
};
