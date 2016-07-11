'use strict';

const authEvents = require('./auth/events.js');
const challengeEvents = require('./challenges/events.js');




// On document ready
$(() => {
  authEvents.addHandlers();
  authEvents.signInOrOut();
  challengeEvents.addHandlers();
});
