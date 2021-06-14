$('.menu-button').on('click', function(i) {
  i.preventDefault();
  $('.hamburger').toggleClass('hamburger-active');
  $('.navigation-line').toggleClass('navigation-line-active');
});

const pageTop = 0;
$(window).on('scroll', function() {
  let pagePosition = $(window).scrollTop();
  if (pagePosition !== pageTop) {
    $('.navigation-line').addClass('navigation-line-default');
    $('.menu-button').addClass('menu-button-active');
  } else {
    $('.navigation-line').removeClass('navigation-line-default');
    $('.menu-button').removeClass('menu-button-active');
  }
});

const slider = tns({
  container: '.reference-carousel',
  items: 1,
  slideBy: 'page',
  speed: 500,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 8000,
  controls: false,
  nav: true,
  navPosition: 'bottom',
});

document.querySelector('.btn-prev').addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector('.btn-next').addEventListener('click', function () {
  slider.goTo('next');
});

$('ul.design-tabs').on('click', 'li:not(.design-tabs__item_active)', function() {
  $(this)
    .addClass('design-tabs__item_active').siblings().removeClass('design-tabs__item_active')
    .closest('div.design-container-bottom').find('main.design-elements').removeClass('design-elements_active').eq($(this).index()).addClass('design-elements_active');
});
