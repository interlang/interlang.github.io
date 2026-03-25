/* ============================================
   INTERLANG — Main JS (lazy-load, interactions)
   ============================================ */

(function () {
  'use strict';

  // Lazy-load Google Maps iframe
  if ('IntersectionObserver' in window) {
    var mapObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var container = entry.target;
          var src = container.getAttribute('data-map-src');
          if (src) {
            var iframe = document.createElement('iframe');
            iframe.src = src;
            iframe.setAttribute('loading', 'lazy');
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
            iframe.title = 'INTERLANG - Google Maps';
            container.appendChild(iframe);
          }
          mapObserver.unobserve(container);
        }
      });
    }, { rootMargin: '200px' });

    document.addEventListener('DOMContentLoaded', function () {
      var maps = document.querySelectorAll('.map-container[data-map-src]');
      maps.forEach(function (el) { mapObserver.observe(el); });
    });
  }
})();
