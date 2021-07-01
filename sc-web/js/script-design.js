$(document).ready(function() {

  const slider = tns({
    container: '.design-reference__carousel',
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
      .closest('div.design-container-bottom').find('div.design-elements')
      .fadeOut('fast').eq($(this).index()).fadeIn('slow');

    $(this)
      .closest('div.design-container-bottom').find('div.design-elements')
      .removeClass('design-elements_mfp')
      .eq($(this).index()).addClass('design-elements_mfp');

    $('.design-elements_mfp').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      },
      showCloseBtn: false
    });

  });

  $('.design-reference__carousel').magnificPopup({
    items: [
      {src: 'images/design/ref_first_image.png'},
      {src: 'images/design/ref_second_image.png'},
      {src: 'images/design/ref_third_image.png'}
    ],
    type: 'image',
    gallery: {
      enabled: true
    },
    showCloseBtn: false
  });

  $('.design-elements_mfp').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    showCloseBtn: false
  });

});
