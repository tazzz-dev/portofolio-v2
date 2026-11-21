/* =========================================================
   SCROLL ANIMATION LAB · runtime kecil
   ---------------------------------------------------------
   1. Tandai section .is-in saat masuk viewport (sekali).
   2. Isi --p (0→1) untuk varian yang butuh progres scroll.
   3. Tombol "ulangi" untuk memutar animasi sekali lagi.

   Tanpa library. Kalau JS mati, lihat <noscript> di scrolls.html.
   ========================================================= */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var secs = Array.prototype.slice.call(document.querySelectorAll('[data-sa]'));
  if (!secs.length) return;

  var reveal = function (el) {
    el.classList.add('is-in');
    el.style.setProperty('--p', el.dataset.sa === 's4' ? '1' : '0.5');
  };

  /* ---------- 1. masuk viewport → .is-in ---------- */
  var hasIO = 'IntersectionObserver' in window;

  if (hasIO && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.06 });

    secs.forEach(function (sec) { io.observe(sec); });
  } else {
    secs.forEach(reveal);
  }

  /* ---------- 2. progres scroll untuk parallax + progress bar ---------- */
  var progressSecs = secs.filter(function (sec) {
    return sec.dataset.sa === 's3' || sec.dataset.sa === 's4';
  });

  var setProgress = function () {
    var vh = window.innerHeight || document.documentElement.clientHeight;

    progressSecs.forEach(function (sec) {
      var rect = sec.getBoundingClientRect();
      /* 0 = bagian atas section menyentuh bawah viewport
         1 = bagian bawahnya sudah lewat atas viewport */
      var p = (vh - rect.top) / (rect.height + vh);
      p = Math.min(1, Math.max(0, p));
      sec.style.setProperty('--p', p.toFixed(4));
    });
  };

  if (progressSecs.length) {
    var ticking = false;

    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        setProgress();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    setProgress();
  }

  /* ---------- 3. tombol ulangi ---------- */
  document.querySelectorAll('[data-sa-replay]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-sa-replay');
      var sec = document.getElementById(id);
      if (!sec || !sec.hasAttribute('data-sa')) return;

      /* taruh bagian di dekat atas layar supaya animasinya terlihat;
         html punya scroll-behavior: smooth, jadi matikan sebentar
         supaya lompatannya instan dan animasi tidak jalan di tengah scroll */
      var top = sec.getBoundingClientRect().top + window.pageYOffset - 120;
      var root = document.documentElement;
      var prev = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, top);
      root.style.scrollBehavior = prev;

      /* restart: buang .is-in, paksa reflow, lalu pasang lagi */
      sec.classList.remove('is-in');
      void sec.offsetWidth;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { sec.classList.add('is-in'); });
      });
    });
  });
})();
