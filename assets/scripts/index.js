'use strict';

const authEvents = require('./apiActions/auth/events.js');
const fileEvents = require('./apiActions/files/events.js');
const folderEvents = require('./apiActions/folders/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  authEvents.signInOrOut();
  fileEvents.addHandlers();
  folderEvents.addHandlers();
});
