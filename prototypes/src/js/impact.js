(function($) {
  $('.navbar-toggler')
    .on('click', function(e) {
    $('.navbar-collapse')
      .toggleClass('show');
  });

  $('.nav-search__link')
    .on('click', function() {
    $(this)
      .parents('.nav-search')
      .toggleClass('active');
  });

  $('.accordion__item-title')
    .on('click', function() {
    $(this)
      .parents('.accordion')
      .children('.accordion__item')
      .removeClass('active');
    $(this)
      .parents('.accordion__item')
      .toggleClass('active');
    return false;
  });

  $('.filter__link')
    .on('click', function() {
    $(this)
      .parents('.filter')
      .toggleClass('active');

    return false;
  });
})(jQuery);
