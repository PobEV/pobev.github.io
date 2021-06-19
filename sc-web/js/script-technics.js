$(document).ready(function() {

  $('.options__item').on('click', function() {
    $(this).closest('ul.std-ul').find('div.options__descr')
    .eq($(this).index()).fadeToggle('fast');
    });

});
