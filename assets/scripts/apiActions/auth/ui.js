'use strict';

const app = require('../../app.js');

const failure = (error) => {
  console.error(error);
};

const signInFailure = () => {
  $('#sign-in-notes').empty();
  $('#sign-in-notes').append('Incorrect Username or Password. Try Again.');
};

const signUpFailure = () => {
  $('#sign-up-notes').empty();
  $('#sign-up-notes').append("Passwords don't match or this username already exists. Try Again.");
};

const signUpSuccess = function(data){
  $('#signin-email').val($('#signup-email').val());
  $('#signin-password').val($('#signup-password').val());
  $('#sign-in').submit();
  app.user = data.user;
  $('#signin-modal').modal('hide');
  $('#signup-modal').modal('hide');
  $('#signed-out').hide();
  $('.signed-in').show();
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#signin-modal').modal('hide');
  $('#signup-modal').modal('hide');
  $('#signed-out').hide();
  $('body').toggleClass('intro-body');
  $('.signed-in').show();
  $('.jumbotron').show();
  $('.intro').hide();
  $('.welcome').show();
  $('.welcome').html('<h1>Hello, ' + app.user.givenName +'</h1>');
};

const signOutSuccess = () => {
  app.user = null;
  app.currentUserChallenge = null;
  $('#signout-modal').modal('hide');
  $('#password-modal').modal('hide');
  $('#signup-email').val('');
  $('#signup-password').val('');
  $('#signup-password-confirmation').val('');
  $('#signin-email').val('');
  $('#signin-password').val('');
  $('#signed-in').hide();
  $('.signed-in').hide();
  $('#contents').empty();
  $('#signed-out').show();
  $('.jumbotron').show();
  $('.welcome').hide();
  $('.intro').show();
  $('.step1').hide();
  $('.step2').hide();
  $('.step3').hide();
};

const changePasswordSuccess = () => {
  $('#password-modal').modal('hide');
};

const changePasswordFailure = () => {
  $('#change-password').append('Password is incorrect. Try Again.');
};


module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  signInFailure,
  signUpFailure,
  changePasswordSuccess,
  changePasswordFailure,
};
