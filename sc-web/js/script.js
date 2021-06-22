$(document).ready(function() {

  $('.menu-button').on('click', function(i) {
    i.preventDefault();
    $('.hamburger').toggleClass('hamburger-active');
    $('.navline_popup').toggleClass('navline_active');
  });


  $(window).on('scroll', function() {
    let pageWidth = document.body.offsetWidth;
    let pageHeight = document.body.offsetHeight;
    let pagePosition = $(window).scrollTop();
    if (pagePosition < pageHeight/2.5 && pageWidth > 575) {
      $('.menu-button').fadeOut('slow');
      $('.navline_popup').removeClass('navline_active');
      $('.hamburger').removeClass('hamburger-active');
    } else {
      $('.menu-button').fadeIn('fast');
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > $(document).outerHeight(true)/3) {
      $('.go-up').fadeIn();
    } else {
      $('.go-up').fadeOut();
    }
  });

  // $("a[href^='#']").click(function(){
  //     let _href = $(this).attr("href");
  //     $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  //     return false;
  // });

});
