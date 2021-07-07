function openPage() {
  $('.fadein-container').fadeIn(900);
};

openPage();

$(document).ready(function() {

  function soundClick(type) {
   let audio = new Audio(); // Создаём новый элемент Audio
   if (type == 'right') {
     audio.src = 'files/index/100-1_true.mp3'; // Указываем путь к звуку "клика"
   } else {
     audio.src = 'files/index/100-1_false.mp3'; // Указываем путь к звуку "клика"
   };
   audio.autoplay = true; // Автоматически запускаем
  }

  function openMain() {
    window.location.href = "maindata.html"
  };

  let pageWidth = document.body.offsetWidth;
  if (pageWidth > 1023) {
    $('.login-form__button').on('click', function(i) {
      i.preventDefault();
      if ($('#password').val() == 'test') {
        $('.doors__left').addClass('doors__left_closed');
        $('.doors__right').addClass('doors__right_closed');
        $('.login-form').fadeOut();
        soundClick('right');
        setTimeout(openMain, 2400);
      } else {
        soundClick('false');
        $('.login-form__item').addClass('login-form__item_error');
      };
    });
  } else {
    $('.login-form__button').on('click', function(i) {
      i.preventDefault();
      if ($('#password').val() == 'test') {
        $('.login-form').fadeOut();
        setTimeout(openMain, 600);
      } else {
        $('.login-form__item').addClass('login-form__item_error');
      };
    });
  };

});
