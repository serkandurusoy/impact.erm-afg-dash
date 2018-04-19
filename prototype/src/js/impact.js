(function pageInteractions($) {
  $('.navbar-toggler').on('click', () => {
    $('.navbar-collapse').toggleClass('show');
    return false;
  });

  $('.nav-search__link').on('click', function toggleSearch() {
    $(this)
      .parents('.nav-search')
      .toggleClass('active');
    return false;
  });

  $('.accordion__item-title').on('click', function toggleAccordion() {
    $(this)
      .parents('.accordion')
      .children('.accordion__item')
      .removeClass('active');
    $(this)
      .parents('.accordion__item')
      .toggleClass('active');
    return false;
  });

  $('.filter__link').on('click', function toggleFilter() {
    $(this)
      .parents('.filter')
      .toggleClass('active');
    return false;
  });
})(jQuery);
