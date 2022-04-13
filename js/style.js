$(function(){
  $('#header .nav_btn').click(function(){
    $('#nav_pop').fadeIn();
})

$('#nav_pop .nav_close').click(function(){
   $('#nav_pop').fadeOut();
})//네비 팝업

$('#web_slide').slick({
  infinite: true,
  //autoplay : true,
  //autoplaySpeed : 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  //variableWidth가 width값을 잡고있기 때문에 미디어쿼리로 슬라이드 반응형이 안되기 때문에
  //반응형 제이쿼리 넣어줌 1024px 부터 실행되기때문에 1025px부터로 넣어줌
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        variableWidth: false,
      }
    }
  ]
});//웹디자인 슬라이드

})//js end