
Drupal.taxonomyContextAttach = function () {
  $('ul.taxonomy-context-menu').each(function () {
    Drupal.preventSelect(this);
    $(this)
      .removeClass('taxonomy-context-menu')
      .addClass('menu')
      .find('li.collapsed')
      .each(function () {
        /*
        if (!$('ul', this).size()) {
          var class = 'leaf';
        }
        else if ($('ul li:active', this).size()) {
          var class = 'expanded';
        }
        else {
          var class = 'collapsed';
        }
        */

        $(this).addClass('collapsed').addClass('activemenu-processed');
      })
      .click(function (e) {
        Drupal.activemenuToggle(this, e);
      });
  });
};

// duh -- aws
Drupal.allAttach = function () {
  Drupal.formTweakerAttach();
  Drupal.taxonomyContextAttach();
}

if (Drupal.jsEnabled) {
  $(document).ready(Drupal.allAttach);
}
