$(document).ready(function() {

  $('.std-ul__item_pointer').on('click', function() {
    $(this).closest('ul.std-ul').find('div.options__descr')
    .eq($(this).index()).fadeToggle('fast');
    });

});
