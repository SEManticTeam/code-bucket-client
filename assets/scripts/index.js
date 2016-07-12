'use strict';

const sortable = require('jquery-ui/ui/widgets/sortable');
const shake = require('jquery-ui/ui/effects/effect-shake');
const slide = require('jquery-ui/ui/effects/effect-slide');
const drop = require('jquery-ui/ui/effects/effect-drop');

const authEvents = require('./apiActions/auth/events.js');
const challengeEvents = require('./apiActions/challenges/events.js');
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
