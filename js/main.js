$(function() {

  /************************************/
  /*******   ハンバーガー   ***********/
  /************************************/
  //ハンバーガーメニューをクリック
  $('.hamburger').on('click', function() {
    hamburger();
  });
  //メニューのリンクをクリック
  $('#navi a').on('click', function() {
    hamburger();
  });

});

  /************************************/
  /****  共通関数 ハンバーガー   ******/
  /************************************/
  function hamburger() {
    $('.hamburger').toggleClass('active');
    if ($('.hamburger').hasClass('active')) {
      $('#navi').addClass('active');
    } else {
      $('#navi').removeClass('active');
    }
  }

