'use strict';

const authEvents = require('./auth/events.js');
const challengeEvents = require('./challenges/events.js');
const helpers = require('./helpers');

helpers.hideAll();
$('.signed-out').show();
// helpers.runBanner();

$('tbody').sortable();

// On document ready
$(() => {
  authEvents.addHandlers();
  // authEvents.signInOrOut(); // do we need this function in addition to event handlers?
  challengeEvents.addHandlers();
});
