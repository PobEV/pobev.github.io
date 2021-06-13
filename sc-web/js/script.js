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
