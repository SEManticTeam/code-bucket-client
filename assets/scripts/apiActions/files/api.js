'use strict';

const app = require('../../app.js');
const uploadScript = require('./uploadScript.js');

// const show = () => {
//   return $.ajax({
//     url: app.host + '/games/',
//     method: "GET"
//   });
// };
//
// const index = (gameId) => {
//   return $.ajax({
//     url: app.host + '/games/' + gameId,
//     method: "GET"
//   });
// };

const create = function(data){

  // upload to AWS bucket
  uploadScript.uploadFile(data);

  // get the echo server response as a check
  return $.ajax({
    url: 'http://httpbin.org/post',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
    contentType: false,
    processData: false,
  });
};

// const update = function(id, data){
//   return $.ajax({
//     url: app.host + '/games/' + id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: data,
//   });
// };
//
// const destroy = function(gameId){
//   return $.ajax({
//     url: app.host + '/games/' + gameId,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: '',
//   });
// };

module.exports = {
  // show,
  // index,
  create,
  // update,
  // destroy
};
