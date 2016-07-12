'use strict';

const app = require('../app.js');
// const api = require('./api.js');

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
  $('.signed-in').show();
  $('.jumbotron').show();
  $('#welcome').html('<h1>Hello, ' + app.user.givenName +'</h1>');
};

const signOutSuccess = () => {
  app.user = null;
  $('#signout-modal').modal('hide');
  $('#password-modal').modal('hide');
  $('#signed-in').hide();
  $('.signed-in').hide();
  $('.jumbotron').hide();
  $('#signed-out').show();
  // $('.content').empty();
  $('#signup-email').val('');
  $('#signup-password').val('');
  $('#signup-password-confirmation').val('');
  // $('#signin-email').val('');
  // $('#signin-password').val('');
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
