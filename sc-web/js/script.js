$('.menu-button').on('click', function(i) {
  i.preventDefault();
  $('.hamburger').toggleClass('hamburger-active');
  $('.navigation-line').toggleClass('navigation-line-active');
});

let pageWidth = document.body.offsetWidth;
$(window).on('scroll', function() {
  let pagePosition = $(window).scrollTop();
  if (pagePosition < 50 && pageWidth > 575) {
    $('.navigation-line').fadeIn('fast');
    $('.navigation-line').addClass('navigation-line-default');
    $('.menu-button').fadeOut('fast');
  } else {
    $('.navigation-line').removeClass('navigation-line-default');
    $('.menu-button').fadeIn('fast');
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 500) {
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

$('#tel').mask('+7 (999) 999-99-99');
