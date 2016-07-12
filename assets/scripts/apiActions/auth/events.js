'use strict';
// const sortable = require('jquery-ui/ui/widgets/sortable');
// const shake = require('jquery-ui/ui/effects/effect-shake');
// const slide = require('jquery-ui/ui/effects/effect-slide');
// const drop = require('jquery-ui/ui/effects/effect-drop');

const getFormFields = require('../../../lib/get-form-fields');
// const app = require('../app.js');
const api = require('./api');
const ui = require('./ui');
const helpers = require('./helpers');

const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.signUpFailure);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.signInFailure);
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.changePasswordFailure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  helpers.runBanner();
};

// do we need this function in addition to event handlers?
// const signInOrOut = () => {
//     $(function() {
//       if (app.user) {
//       $('.signed-out').hide();
//       $('#signed-out').hide();
//     }
//     else {
//       $('.signed-in').hide();
//     }
//   }
// );
// };

module.exports = {
  addHandlers,
  // signInOrOut,
};
