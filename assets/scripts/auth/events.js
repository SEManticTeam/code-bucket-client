'use strict';
const sortable = require('jquery-ui/ui/widgets/sortable');
const shake = require('jquery-ui/ui/effects/effect-shake');
const slide = require('jquery-ui/ui/effects/effect-slide');
const drop = require('jquery-ui/ui/effects/effect-drop');


const getFormFields = require('../../../lib/get-form-fields');
const app = require('../app.js');
const api = require('./api');
const ui = require('./ui');


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

const viewChallenges = (event) => {
  event.preventDefault();
  $('.jumbotron').hide();
  $('.single-challenge').hide();
  $('.my-submissions').hide();
  $('.all-challenges').show();
};

const viewMySubmissions = (event) => {
  event.preventDefault();
  $('.jumbotron').hide();
  $('.single-challenge').hide();
  $('.all-challenges').hide();
  $('.my-submissions').show();
};



const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('tbody').sortable();
  $('.step1').hide();
  $('.step2').hide();
  $('.step3').hide();
  $('.step4').hide();
  $( ".step1" ).show(600).delay(2000).effect('drop',{direction:'right'}, 600);
  $( ".step2" ).delay(3600).show(600).delay(2200).effect('drop',{direction:'right'}, 600);
  $( ".step3" ).delay(7200).show(600).delay(2200).effect('drop',{direction:'right'}, 600);
  $( ".step4" ).delay(10800).show(600);
  $(".all-challenges").hide();
  $(".my-submissions").hide();
  $('#view-challenges').on('click', viewChallenges);
  $('#view-my-submissions').on('click', viewMySubmissions);
};

const signInOrOut = () => {
    $(function() {
      if (app.user) {
      $('.signed-out').hide();
      $('#signed-out').hide();
    }
    else {
      $('.signed-in').hide();
    }
  }
);
};
//
module.exports = {
  addHandlers,
  signInOrOut,
};
