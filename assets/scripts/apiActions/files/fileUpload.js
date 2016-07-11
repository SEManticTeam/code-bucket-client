'use strict';

// process.env is where we have acess to the .env content
require('dotenv').config();

const crypto = require('crypto');
const fileType = require('file-type');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

const prepareFile = (data) => {
  return Object.assign({
    data,
    ext: 'bin',
    mime: 'application/octet-stream'
  }, fileType(data));
};

const randomeHexString = (length) => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(length, (error, buffer) => {
      if(error){
        reject(error);
      }
      resolve(buffer.toString('hex'));
    });
  });
};

const awsUpload = (file) => {
  return randomeHexString(16)
  .then((filename) => {
    let dir = new Date().toISOString().split('T')[0];
    return {
      ACL: "public-read",
      Body: file.data,
      Bucket: 'wdi-12-mh-storage',
      ContentType: file.mime,
      Key: `${dir}/${filename}.${file.ext}`
    };
  })
  .then((options) => {
    return new Promise((resolve, reject) => {
      s3.upload(options, function(error, data){
        if (error) {
          reject(error);
        }

        resolve(data);
      });
    });
  });
};

module.exports = {
  prepareFile,
  awsUpload,
};
