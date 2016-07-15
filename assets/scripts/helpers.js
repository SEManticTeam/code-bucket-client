'use strict';

// this function needs more
const hideAll = () => {
  $('.signed-in').hide();
  $('.signed-out').hide();
  $('.all-challenges').hide();
  $('.my-submissions').hide();
  $('#my-challenge-info').hide();
  $('#my-challenge-table').hide();
  $('.single-challenge-view').hide();
};

// sarah should check over this function
const runBanner = () => {
  $('.step1').hide();
  $('.step2').hide();
  $('.step3').hide();
  $('.step4').hide();
  $('.step1').show(900).delay(2000).effect('drop',{direction:'right'}, 600);
  $('.step2').delay(3900).show(600).delay(2200).effect('drop',{direction:'right'}, 600);
  $('.step3').delay(7500).show(600).delay(2200).effect('drop',{direction:'right'}, 600);
  $('.step4').delay(11200).show(600);
};

module.exports = {
  hideAll,
  runBanner,
};
