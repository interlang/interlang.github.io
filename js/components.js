/* ============================================
   INTERLANG — Shared Components
   ============================================ */

(function () {
  'use strict';

  var PHONE = '+421 905 923 729';
  var PHONE_LINK = 'tel:+421905923729';
  var PHONE2 = '+421 2 38 100 330';
  var PHONE2_LINK = 'tel:+421238100330';
  var EMAIL = 'office@interlang.sk';
  var EMAIL_LINK = 'mailto:office@interlang.sk';
  var ADDRESS = '\u0160vabinsk\u00e9ho 13, 851 01 Bratislava - Petr\u017ealka';
  var MAP_URL = 'https://maps.google.com/?q=48.118414,17.099286';
  var SITE = 'https://interlang.github.io';

  var NAV_ITEMS = [
    { label: 'Domov', href: '/' },
    { label: '\u00daradn\u00e9 preklady', href: '/uradne-preklady.html' },
    { label: 'Preklad dokumentov', href: '/preklad-dokumentov.html' },
    { label: 'Expresn\u00e9 preklady', href: '/expresny-preklad.html' },
    { label: 'Tlmo\u010denie', href: '/tlmocenie.html' },
    { label: 'Kontakt', href: '/kontakt.html' }
  ];

  var LANG_PAGES = [
    { label: 'Angli\u010dtina', href: '/preklady-z-anglictiny.html' },
    { label: 'Nem\u010dina', href: '/preklady-z-nemciny.html' },
    { label: 'Ukrajin\u010dina', href: '/preklady-z-ukrajinciny.html' },
    { label: 'Ru\u0161tina', href: '/preklady-z-rustiny.html' },
    { label: 'Ma\u010far\u010dina', href: '/preklady-z-madarciny.html' },
    { label: 'Franc\u00faz\u0161tina', href: '/preklady-z-francuzstiny.html' },
    { label: 'Talian\u010dina', href: '/preklady-z-talianciny.html' },
    { label: '\u0160paniel\u010dina', href: '/preklady-zo-spanielciny.html' },
    { label: '\u010ce\u0161tina', href: '/preklady-z-cestiny.html' },
    { label: 'Po\u013e\u0161tina', href: '/preklady-z-polstiny.html' }
  ];

  var DOC_PAGES = [
    { label: 'Preklad rodn\u00e9ho listu', href: '/preklad-rodneho-listu.html' },
    { label: 'Preklad zmluvy', href: '/preklad-zmluvy.html' },
    { label: 'Preklad vysved\u010denia', href: '/preklad-vysvedcenia.html' },
    { label: 'Apostila', href: '/apostila.html' }
  ];

  var PHONE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
  var EMAIL_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>';

  function currentPath() {
    var p = window.location.pathname;
    if (p === '/index.html') return '/';
    return p;
  }

  function isActive(href) {
    var p = currentPath();
    return p === href || (href === '/' && p === '/index.html');
  }

  function buildHeader() {
    var el = document.getElementById('site-header');
    if (!el) return;

    var navLinks = NAV_ITEMS.map(function (item) {
      return '<a href="' + item.href + '"' + (isActive(item.href) ? ' class="active"' : '') + '>' + item.label + '</a>';
    }).join('');

    var mobileLinks = NAV_ITEMS.map(function (item) {
      return '<a href="' + item.href + '"' + (isActive(item.href) ? ' class="active"' : '') + '>' + item.label + '</a>';
    }).join('');

    var mobileLangLinks = LANG_PAGES.map(function (item) {
      return '<a href="' + item.href + '"' + (isActive(item.href) ? ' class="active"' : '') + '>' + item.label + '</a>';
    }).join('');

    el.innerHTML =
      '<div class="site-header">' +
        '<div class="header-inner">' +
          '<a href="/" class="logo">INTER<span>LANG</span></a>' +
          '<nav class="desktop-nav">' + navLinks + '</nav>' +
          '<a href="' + PHONE_LINK + '" class="header-phone">' + PHONE_SVG + ' <span class="header-phone-num">' + PHONE + '</span></a>' +
          '<button class="hamburger" aria-label="Menu" id="hamburger-btn">\u2630</button>' +
        '</div>' +
      '</div>' +
      '<div class="mobile-nav-overlay" id="nav-overlay"></div>' +
      '<nav class="mobile-nav" id="mobile-nav">' +
        '<button class="mobile-nav-close" id="nav-close" aria-label="Zatvori\u0165">\u00d7</button>' +
        mobileLinks +
        '<div style="margin-top:1rem;font-size:0.85rem;color:rgba(255,255,255,0.5);padding:0.5rem 0">Jazyky</div>' +
        mobileLangLinks +
        '<div class="mobile-nav-contact">' +
          '<a href="' + PHONE_LINK + '">' + PHONE_SVG + ' ' + PHONE + '</a>' +
          '<a href="' + EMAIL_LINK + '">' + EMAIL_SVG + ' ' + EMAIL + '</a>' +
        '</div>' +
      '</nav>';

    var hamburger = document.getElementById('hamburger-btn');
    var nav = document.getElementById('mobile-nav');
    var overlay = document.getElementById('nav-overlay');
    var closeBtn = document.getElementById('nav-close');

    function openNav() { nav.classList.add('is-open'); overlay.classList.add('is-open'); document.body.style.overflow = 'hidden'; }
    function closeNav() { nav.classList.remove('is-open'); overlay.classList.remove('is-open'); document.body.style.overflow = ''; }

    hamburger.addEventListener('click', openNav);
    overlay.addEventListener('click', closeNav);
    closeBtn.addEventListener('click', closeNav);
  }

  function buildFooter() {
    var el = document.getElementById('site-footer');
    if (!el) return;

    var navLinks = NAV_ITEMS.map(function (item) {
      return '<a href="' + item.href + '">' + item.label + '</a>';
    }).join('');

    var docLinks = DOC_PAGES.map(function (item) {
      return '<a href="' + item.href + '">' + item.label + '</a>';
    }).join('');

    var langLinks = LANG_PAGES.map(function (item) {
      return '<a href="' + item.href + '">' + item.label + '</a>';
    }).join('');

    el.innerHTML =
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="footer-grid">' +
            '<div class="footer-col">' +
              '<h4>Navig\u00e1cia</h4>' +
              navLinks +
            '</div>' +
            '<div class="footer-col">' +
              '<h4>Dokumenty</h4>' +
              docLinks +
            '</div>' +
            '<div class="footer-col">' +
              '<h4>Jazyky</h4>' +
              langLinks +
            '</div>' +
            '<div class="footer-col">' +
              '<h4>Kontakt</h4>' +
              '<a href="' + PHONE_LINK + '">' + PHONE_SVG + ' ' + PHONE + '</a>' +
              '<a href="' + PHONE2_LINK + '">' + PHONE_SVG + ' ' + PHONE2 + '</a>' +
              '<a href="' + EMAIL_LINK + '">' + EMAIL_SVG + ' ' + EMAIL + '</a>' +
              '<a href="' + MAP_URL + '" target="_blank" rel="noopener">' + ADDRESS + '</a>' +
            '</div>' +
          '</div>' +
          '<div class="footer-nap">' +
            '<p><strong>Prekladate\u013esk\u00e1 agent\u00fara INTERLANG</strong></p>' +
            '<p>' + ADDRESS + '</p>' +
            '<p>Tel: <a href="' + PHONE_LINK + '">' + PHONE + '</a> | Email: <a href="' + EMAIL_LINK + '">' + EMAIL + '</a></p>' +
            '<p style="margin-top:1rem;font-size:0.8rem;color:rgba(255,255,255,0.5)">\u00a9 ' + new Date().getFullYear() + ' INTERLANG. V\u0161etky pr\u00e1va vyhraden\u00e9.</p>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildHeader();
    buildFooter();
  });
})();
