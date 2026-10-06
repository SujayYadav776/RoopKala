/* ==========================================================================
   RoopKala — shared behaviour: header, mega menu, carousel, reveal,
   mobile drawer, filters, gallery, accordions. No commerce, no storage.
   ========================================================================== */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Sticky header shadow ---------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Hero carousel ---------- */
  var hero = document.querySelector('[data-hero]');
  if (hero) {
    var slides = [].slice.call(hero.querySelectorAll('.hero__slide'));
    var dots = [].slice.call(hero.querySelectorAll('.hero__dot'));
    var i = 0, timer = null;
    var DELAY = 6200;

    function show(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('is-active', k === i); });
      dots.forEach(function (d, k) {
        d.classList.toggle('is-on', k === i);
        d.setAttribute('aria-current', k === i ? 'true' : 'false');
      });
    }
    function play() {
      if (reduced) return;
      stop();
      timer = setInterval(function () { show(i + 1); }, DELAY);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    show(0);
    play();

    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', play);
    hero.addEventListener('focusin', stop);

    var prev = hero.querySelector('[data-hero-prev]');
    var next = hero.querySelector('[data-hero-next]');
    if (prev) prev.addEventListener('click', function () { show(i - 1); play(); });
    if (next) next.addEventListener('click', function () { show(i + 1); play(); });
    dots.forEach(function (d, k) {
      d.addEventListener('click', function () { show(k); play(); });
    });

    document.addEventListener('keydown', function (e) {
      if (!hero.matches(':hover')) return;
      if (e.key === 'ArrowLeft') { show(i - 1); play(); }
      if (e.key === 'ArrowRight') { show(i + 1); play(); }
    });
  }

  /* ---------- Desktop mega menu (click for keyboard/touch parity) ---------- */
  [].slice.call(document.querySelectorAll('.nav__item.has-mega')).forEach(function (item) {
    var btn = item.querySelector('.nav__link');
    if (!btn) return;
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var open = item.classList.contains('is-open');
      document.querySelectorAll('.nav__item.is-open').forEach(function (o) {
        o.classList.remove('is-open');
        var b = o.querySelector('.nav__link');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest('.nav__item')) return;
    document.querySelectorAll('.nav__item.is-open').forEach(function (o) {
      o.classList.remove('is-open');
      var b = o.querySelector('.nav__link');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Mobile drawer ---------- */
  var drawer = document.querySelector('[data-drawer]');
  var scrim = document.querySelector('[data-scrim]');
  function setDrawer(on) {
    if (!drawer || !scrim) return;
    drawer.classList.toggle('is-open', on);
    scrim.classList.toggle('is-on', on);
    document.body.style.overflow = on ? 'hidden' : '';
  }
  [].slice.call(document.querySelectorAll('[data-open-drawer]')).forEach(function (b) {
    b.addEventListener('click', function () { setDrawer(true); });
  });
  [].slice.call(document.querySelectorAll('[data-close-drawer]')).forEach(function (b) {
    b.addEventListener('click', function () { setDrawer(false); });
  });
  if (scrim) scrim.addEventListener('click', function () { setDrawer(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { setDrawer(false); setSheet(false); }
  });

  /* ---------- Height-animated panels ----------
     Animating to a measured pixel height then releasing to `auto` keeps panels
     correct after webfonts/images change their content height. */
  function openPanel(panel) {
    panel.style.height = panel.scrollHeight + 'px';
    var done = function (e) {
      if (e.target !== panel) return;
      panel.style.height = 'auto';
      panel.removeEventListener('transitionend', done);
    };
    panel.addEventListener('transitionend', done);
  }

  function closePanel(panel) {
    panel.style.height = panel.scrollHeight + 'px';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { panel.style.height = '0px'; });
    });
  }

  /* ---------- Mobile drawer nav ---------- */
  [].slice.call(document.querySelectorAll('.m-nav__item')).forEach(function (item) {
    var btn = item.querySelector('.m-nav__toggle');
    var panel = item.querySelector('.m-nav__panel');
    if (!btn || !panel) return;
    btn.addEventListener('click', function () {
      var open = item.classList.toggle('is-open');
      if (open) openPanel(panel); else closePanel(panel);
    });
  });

  /* ---------- Content accordions (PDP) ---------- */
  [].slice.call(document.querySelectorAll('.acc__item')).forEach(function (item) {
    var btn = item.querySelector('.acc__btn');
    var panel = item.querySelector('.acc__panel');
    if (!btn || !panel) return;
    btn.addEventListener('click', function () {
      var open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) openPanel(panel); else closePanel(panel);
    });
    if (item.classList.contains('is-open')) panel.style.height = 'auto';
  });

  /* ---------- Reveal on scroll ---------- */
  var io = null;
  if ('IntersectionObserver' in window && !reduced) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  }

  function observeReveals(root) {
    var nodes = [].slice.call((root || document).querySelectorAll('.rv:not(.is-in)'));
    if (!nodes.length) return;
    if (!io) { nodes.forEach(function (n) { n.classList.add('is-in'); }); return; }
    nodes.forEach(function (n) { io.observe(n); });
  }

  observeReveals(document);

  // Pages inject cards after this script runs; let them register the new nodes.
  window.RKUI = { observeReveals: observeReveals };

  /* ---------- Lookbook save (session only, nothing stored) ---------- */
  var saved = {};
  document.addEventListener('click', function (e) {
    var w = e.target.closest('[data-wish]');
    if (!w) return;
    e.preventDefault();
    var id = w.getAttribute('data-wish');
    saved[id] = !saved[id];
    w.classList.toggle('is-on', saved[id]);
    var n = Object.keys(saved).filter(function (k) { return saved[k]; }).length;
    var counter = document.querySelector('[data-wish-count]');
    if (counter) counter.textContent = n;
  });

  /* ---------- Filter sheet (mobile listing) ---------- */
  var filters = document.querySelector('[data-filters]');
  function setSheet(on) {
    if (!filters) return;
    filters.classList.toggle('is-open', on);
    if (scrim) scrim.classList.toggle('is-on', on);
    document.body.style.overflow = on ? 'hidden' : '';
  }
  [].slice.call(document.querySelectorAll('[data-open-filters]')).forEach(function (b) {
    b.addEventListener('click', function () { setSheet(true); });
  });
  [].slice.call(document.querySelectorAll('[data-close-filters]')).forEach(function (b) {
    b.addEventListener('click', function () { setSheet(false); });
  });

  /* ---------- Catalogue request form (no backend) ---------- */
  [].slice.call(document.querySelectorAll('[data-request-form]')).forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.parentElement.querySelector('.form-note');
      var input = form.querySelector('input[type=text],input[type=tel],input[type=email]');
      if (note) {
        note.textContent = 'Thank you. A RoopKala kaarigar will call you on ' +
          (input && input.value ? input.value : 'your number') + ' before the next catalogue drop.';
        note.classList.add('ok');
      }
      form.reset();
    });
  });

  /* ---------- Footer year ---------- */
  [].slice.call(document.querySelectorAll('[data-year]')).forEach(function (n) {
    n.textContent = new Date().getFullYear();
  });
})();
