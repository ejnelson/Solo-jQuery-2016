$(function(){
  $('.color-button').on('click',newCube);
});

function newCube(){
  color=$(this).data('color');
  number=$('#'+color).text();
  number=Number(number);
  number++;
  $('#'+color).text(number);
  $('.container').append('<div class="color-cube '+color+'"></div>');
}
