var handleGetColorClick = function(event) {
  console.log('click received');
  $.post('/color', null, handleGetColorResult);
}

var handleGetColorResult = function(result) {
  resultObj = JSON.parse(result);
  $("#color_me li:nth-child(" + resultObj.cell + ")").css('background-color', resultObj.color);
}

$(document).ready(function(){
  $('#get_color').on('click', handleGetColorClick);
});
