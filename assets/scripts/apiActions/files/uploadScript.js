'use strict';

const fileUpload = require('./fileUpload.js');
const fs = require('fs');

// let filename = process.argv[2] || ''; // THIS IS FOR RUNNING AS A SCRIPT

const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (error, data) => {
      if(error){
        reject(error);
      }

      resolve(data);
    });
  });
};

const uploadFile = (filename) => {
  readFile(filename)
  .then(fileUpload.prepareFile)
  .then(fileUpload.awsUpload)
  .then(console.log)
  .catch(console.error);
};

module.exports = {
  readFile,
  uploadFile,
};
