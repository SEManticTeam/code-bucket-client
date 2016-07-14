'use strict';
const drop = require('jquery-ui/ui/effects/effect-drop');

const authEvents = require('./apiActions/auth/events.js');
const challengeEvents = require('./apiActions/challenges/events.js');
const submissionEvents = require('./apiActions/submissions/events.js');




// On document ready
$(() => {
  authEvents.addHandlers();
  authEvents.signInOrOut();
  challengeEvents.addHandlers();
  submissionEvents.addHandlers();
});
