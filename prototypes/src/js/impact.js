(function($) {
  $('.navbar-toggler').on('click', function(e) {
    $('.navbar-collapse').toggleClass('show');
  });

  $('.nav-search__link').on('click', function() {
    $(this).parents('.nav-search').toggleClass('active');
  });
})(jQuery);
