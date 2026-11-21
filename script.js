/* =========================================================
   MUMTAAZ · STYLE LAB
   JS minimal: spotlight varian A + copy hex palet.
   ========================================================= */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Nav aktif mengikuti section (halaman utama) ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.sw-nav a[data-nav]'));
  var targets = links.map(function (a) {
    return { link: a, el: document.getElementById(a.dataset.nav) };
  }).filter(function (t) { return t.el; });

  if (targets.length) {
    var spyRaf = 0;

    var spy = function () {
      spyRaf = 0;
      /* garis acuan sedikit di bawah header tetap; section terakhir
         yang sudah melewati garis itu yang dianggap aktif */
      var line = window.innerHeight * 0.3;
      var current = null;
      targets.forEach(function (t) {
        if (t.el.getBoundingClientRect().top <= line) current = t;
      });
      targets.forEach(function (t) {
        t.link.classList.toggle('is-active', t === current);
      });
    };

    var requestSpy = function () {
      if (!spyRaf) spyRaf = requestAnimationFrame(spy);
    };

    window.addEventListener('scroll', requestSpy, { passive: true });
    window.addEventListener('resize', requestSpy);
    spy();
  }

  /* ---------- 2. Spotlight kursor (varian A) ---------- */
  var stage = document.querySelector('.v-a');
  var spotlight = document.querySelector('.a-spotlight');
  if (stage && spotlight && !reduce && window.matchMedia('(pointer: fine)').matches) {
    var raf = 0;
    stage.addEventListener('pointermove', function (e) {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        var r = stage.getBoundingClientRect();
        spotlight.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        spotlight.style.setProperty('--my', (e.clientY - r.top) + 'px');
        raf = 0;
      });
    });
  }

  /* ---------- 4. Varian proyek P4 · sticky detail (tab list) ---------- */
  document.querySelectorAll('[data-pv4]').forEach(function (root) {
    var items = Array.prototype.slice.call(root.querySelectorAll('.pv4-item'));
    var panels = Array.prototype.slice.call(root.querySelectorAll('.pv4-panel'));
    if (!items.length || !panels.length) return;

    var select = function (index, focus) {
      items.forEach(function (btn, i) {
        var on = i === index;
        btn.classList.toggle('is-on', on);
        btn.setAttribute('aria-selected', on ? 'true' : 'false');
        btn.tabIndex = on ? 0 : -1;
      });
      panels.forEach(function (panel, i) { panel.hidden = i !== index; });
      if (focus) items[index].focus();
    };

    items.forEach(function (btn, i) {
      btn.addEventListener('click', function () { select(i, false); });

      btn.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (i + 1) % items.length;
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (i - 1 + items.length) % items.length;
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = items.length - 1;
        if (next === null) return;
        e.preventDefault();
        select(next, true);
      });
    });
  });

  /* ---------- 5. Klik swatch = copy hex ---------- */
  var toast = document.querySelector('.toast');
  var toastTimer = 0;

  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-on'); }, 1600);
  }

  document.querySelectorAll('.p-sw[data-hex]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var hex = btn.dataset.hex;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(hex).then(
          function () { showToast('COPIED ' + hex); },
          function () { showToast(hex); }
        );
      } else {
        showToast(hex);
      }
    });
  });
})();
