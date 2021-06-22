$(document).ready(function() {

  $('#tel').mask('+7 (999) 999-99-99');

  $('.contact-feedback').validate({
    rules: {
      Name: 'required',
      Phone: 'required',
      Email: {
        required: true,
        email: true
      },
      Feedback: {
        required: true,
        minlength: 30
      }
    },
    messages: {
      Name: '* пожалуйста, введите Ваше имя',
      Phone: '* пожалуйста, введите Ваш телефон',
      Email: {
        required: "* пожалуйста, введите Ваш почтовый адрес",
        email: 'Формат адреса: xxx@domain.xxx'
      },
      Feedback: {
        required: '* пожалуйста, оставьте отзыв',
        minlength: jQuery.validator.format('Минимальное количество символов - {0}')
      }
    }
  });

  function showContactIcons(personPhone, personIcon) {
    $(personPhone).on('click', function(i) {
      i.preventDefault();
      $(personIcon).fadeToggle('fast');
    });
  };

  showContactIcons('#open-contact-mir', '.contact-icon_mir');
  showContactIcons('#open-contact-cher', '.contact-icon_cher');

  new WOW().init();

  function sendEmail(i) {
    $(i).submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "smart.php",
        data: $(i).serialize()
      }).done(function() {
        $(i).find("input").val("");
        $(i).find("textarea").val("");
        $(i).trigger('reset');
        $(".feedback-btn").blur();
        alert('Thank you for your feedback!');
      });
      return false;
    });
  };

  $("#sendme").onCLick(sendEmail("form"));


});
