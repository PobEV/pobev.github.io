$(document).ready(function() {

  var spinner = $('.ymap-container').children('.loader');
  var check_if_load = false;
  var myMapTemp, myPlacemarkTemp;

  function init () {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [55.692744, 37.662160],
      zoom: 16,
      controls: ['zoomControl', 'fullscreenControl'],
    });
    var myPlacemarkTemp = new ymaps.Placemark([55.691508, 37.663147], null, {
	      preset: 'islands#orangeDotIcon'
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp);
    myMapTemp.behaviors.disable('scrollZoom');
    var layer = myMapTemp.layers.get(0).get(0);
    waitForTilesLoad(layer).then(function() {
      spinner.removeClass('is-active');
    });
  }

  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }

  function loadScript(url, callback){
    var script = document.createElement("script");

    if (script.readyState){
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
                script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function(){
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  var ymap = function() {
    $('.ymap-container').mouseenter(function(){
        if (!check_if_load) {
          check_if_load = true;
          spinner.addClass('is-active');
          loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
             ymaps.load(init);
          });
        }
      }
    );
  }

  $(function() {
    ymap();
  });


  $('#tel').mask('+7 (999) 999-99-99');

  jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });

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
      let form = $(i);
      form.validate();
      if (form.valid()) {
        // alert( "Valid: " + form.valid() );
        $.ajax({
          type: "POST",
          url: "smart.php",
          data: $(i).serialize()
        }).done(function() {
          $(i).find("input").val("");
          $(i).find("textarea").val("");
          $(i).trigger('reset');
          $(".feedback-btn").blur();
          $(".overlay").fadeIn('slow');
        });
      } else {
        // alert( "Valid: " + form.valid() );
      };
      return false;
    });
  };

  $('#sendme').on('click', sendEmail("form"));

  $('.modal__close').on('click', function() {
    $(".overlay").fadeOut();
  });

  new ClipboardJS('.btn');

});
