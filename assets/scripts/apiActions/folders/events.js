'use strict';

const onCreateFolder = () => {
  console.log('create folder function run');
};

const addHandlers = () => {
  $('#create-folder').on('submit', onCreateFolder);
};

module.exports = {
  addHandlers,
};
