'use strict';

const getFormFields = require('../../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');

// const draggable = require('jquery-ui/ui/widgets/draggable');
// const resizable = require('jquery-ui/ui/widgets/resizable');
// const sketch = require('../../sketch.js');

// let count= 0;
// const addFunction = (event) => {
//   event.preventDefault();
//   $('#function-holder').append('<div id="function' + count + '" class="functions"><div class="well well-lg"><form><div class="form-group"><label for="exampleInputName2">Function Name</label><input type="text" class="form-control" id="exampleInputName2" placeholder="Your Function Name"></div><div class="form-group"><input type="file" class="form-control" id="exampleInputEmail2"></div><button type="submit" class="btn btn-default">Upload</button></form></div></div>');
//   $('#function' + count).draggable();
//   count++;
// };
//
// let arrowCount= 0;
// const addArrow = (event) => {
//   event.preventDefault();
//   $('#function-holder').append('<div class="functions"><img src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-arrows/006764-3d-transparent-glass-icon-arrows-arrowhead-solid-right.png" width="45px" id="arrow' + arrowCount + '">');
//   $('#arrow' + arrowCount).draggable();
//   arrowCount++;
// };

// $('#add-function').on('click', addFunction);
// $('#add-arrow').on('click', addArrow);


const onFileSubmit = (event) => {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.create(data)
  .done(ui.uploadFileSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#multipart-form-data').on('submit', onFileSubmit);
};

module.exports = {
  addHandlers,
};
