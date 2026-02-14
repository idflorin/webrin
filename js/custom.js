(function (Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.webrin = {
    attach: function (context, settings) {
      // Use the provided context (document or a specific element) as the
      // base for DOM queries to avoid re-initializing elements.
      var root = (context && context.querySelector) ? context : document;

      // Example initialization: mark processed elements to avoid duplicate work.
      var processedClass = 'webrin-processed';
      if (!root.querySelector) {
        return;
      }

      console.log('Webrin theme JS loaded');

      var els = root.querySelectorAll('.webrin-js:not(.' + processedClass + ')');
      els.forEach(function (el) {
        el.classList.add(processedClass);
        // Initialize element behavior here.
      });
    }
  };

})(Drupal, drupalSettings);
