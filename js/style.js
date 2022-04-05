$(function(){
  $('#header .nav_btn').click(function(){
    $('#nav_pop').fadeIn();
})

$('#nav_pop .nav_close').click(function(){
   $('#nav_pop').fadeOut();
})//네비 팝업

$('#web_slide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
});//웹디자인 슬라이드

})//js end