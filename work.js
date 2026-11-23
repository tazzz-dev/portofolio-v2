/* =========================================================
   WORK — wheel nama proyek + galeri foto
   ---------------------------------------------------------
   Dipakai oleh work.html.
   Foto masih komposisi CSS (w-art--1…6); ganti isi
   PROJECTS[].photos dengan file gambar kapan saja.
   ========================================================= */
(function () {
  'use strict';

  var pad = function (n) { return String(n).padStart(2, '0'); };

  /* ---------- data ---------- */
  var PROJECTS = [
    {
      desc: 'Student productivity app: activity tracking, notes with todos, weekly stats, and AI career analysis. Groq reads completed activities to recommend skills and next steps, and the chat can analyse uploaded PDFs and images.',
      meta: 'Frontend Developer · 2026',
      tags: 'React · Express · Prisma · PostgreSQL · Groq AI',
      photos: [1, 2, 5],
      links: [
        ['Repo', 'https://github.com/ProductiveActivity/ProdActivity'],
        ['Live', 'https://project-web-bersama.vercel.app']
      ]
    },
    {
      desc: 'Social action platform: volunteer management, donation campaigns, and impact reporting for communities.',
      meta: 'Full-Stack Developer · 2025',
      tags: 'CodeIgniter 3 · MySQL · PHP',
      photos: [2, 3, 6],
      links: [
        ['Repo', 'https://github.com/mfaatihyusron/socialact'],
        ['Document', 'https://drive.google.com/file/d/1mlVLPcdQsDg9bWOSuAPvfsQ5b9rIk16E/view']
      ]
    },
    {
      desc: 'Restaurant menu ordering via QR code: POS, stock, table numbers, and cashier accounts, plus self-service for guests.',
      meta: 'Full-Stack Developer · 2025',
      tags: 'CodeIgniter 3 · MySQL · PHP',
      photos: [3, 1, 4],
      links: [
        ['Repo', 'https://github.com/tazzz-dev/resto-app'],
        ['Document', 'https://drive.google.com/file/d/1llr6OYW9KATH3qa5okMk4BIHrS4VumBy/view']
      ]
    },
    {
      desc: 'Classic Snake written in C++: terminal grid, keyboard input, growing tail, and a Makefile build.',
      meta: 'Game Developer · 2025',
      tags: 'C++ · Makefile',
      photos: [4, 5, 1],
      links: [
        ['Repo', 'https://github.com/tazzz-dev/snake-classic']
      ]
    },
    {
      desc: 'Two-player Pong in C++: paddle movement, ball physics, scoring, and a Makefile build.',
      meta: 'Game Developer · 2025',
      tags: 'C++ · Makefile',
      photos: [5, 2, 3],
      links: [
        ['Repo', 'https://github.com/tazzz-dev/pong-classic']
      ]
    },
    {
      desc: 'UI/UX case study: design thinking process, research, personas, and interface concepts documented in Figma.',
      meta: 'System Analyst & UI/UX · 2024',
      tags: 'Figma · Design Thinking',
      photos: [6, 4, 2],
      links: [
        ['Document', 'https://drive.google.com/file/d/17-eMZJQ6C2b9_94BUbUz9_P3hgrNrgQs/view']
      ]
    }
  ];

  /* ---------- latar bintang ---------- */
  var starBtns = Array.prototype.slice.call(document.querySelectorAll('[data-star]'));
  if (starBtns.length) {
    starBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.body.dataset.stars = btn.dataset.star;
        starBtns.forEach(function (b) {
          var on = b === btn;
          b.classList.toggle('is-on', on);
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
      });
    });
  }

  /* ---------- wheel ---------- */
  var root = document.querySelector('[data-wk]');
  if (!root) return;

  var wheel = root.querySelector('.wk-wheel');
  var names = Array.prototype.slice.call(root.querySelectorAll('.wk-name'));
  var photosBox = root.querySelector('[data-wk-photos]');
  var descEl = root.querySelector('[data-wk-desc]');
  var roleEl = root.querySelector('[data-wk-role]');
  var tagsEl = root.querySelector('[data-wk-tags]');
  var linksEl = root.querySelector('[data-wk-links]');
  var countEl = root.querySelector('[data-wk-count]');
  var totalEl = root.querySelector('[data-wk-total]');

  var total = names.length;
  var active = 0;
  var photo = 0;
  var gap = 118;
  var gapX = 240;
  var mqMobile = window.matchMedia('(max-width: 600px)');

  /* semua foto tiap proyek dibuat sekali, lalu tinggal ditampilkan */
  photosBox.innerHTML = '';
  var allPhotos = [];

  PROJECTS.forEach(function (proj, p) {
    proj.photos.forEach(function (art, i) {
      var el = document.createElement('div');
      el.className = 'wk-photo';
      el.innerHTML = '<div class="w-art w-art--' + art + '" aria-hidden="true">' +
        '<span class="w-art-n">' + pad(p + 1) + '</span></div>';
      photosBox.appendChild(el);
      allPhotos.push({ el: el, p: p, i: i });
    });
  });

  var measure = function () {
    var h = wheel.clientHeight || 620;
    gap = Math.max(82, Math.min(126, h / 5.1));
    gapX = Math.min(wheel.clientWidth * 0.6, 280);
    paintWheel();
  };

  var paintWheel = function () {
    var half = Math.floor(total / 2);
    var drum = root.classList.contains('wk--c');

    names.forEach(function (el, i) {
      /* jarak melingkar: -half … half-1, jadi selalu ada nama di atas & bawah */
      var d = ((i - active + half + total) % total) - half;
      var abs = Math.abs(d);
      var scale = 1 - Math.min(abs, 2) * 0.07;
      var opacity = abs === 0 ? 1 : Math.max(0.1, 0.7 - abs * 0.19);
      var li = el.closest('li');

      var transform = mqMobile.matches
        ? 'translateY(-50%) translateX(' + (d * gapX) + 'px) scale(' + scale.toFixed(3) + ')'
        : 'translateY(calc(-50% + ' + (d * gap) + 'px)) scale(' + scale.toFixed(3) + ')' +
          (drum ? ' rotateX(' + (d * -9) + 'deg) translateZ(' + (-abs * 60) + 'px)' : '');

      li.style.transform = transform;
      li.style.opacity = opacity.toFixed(3);
      li.style.zIndex = String(10 - abs);

      el.classList.toggle('is-on', d === 0);
      el.setAttribute('aria-current', d === 0 ? 'true' : 'false');
    });
  };

  var paintMedia = function () {
    var proj = PROJECTS[active];

    allPhotos.forEach(function (item) {
      item.el.classList.toggle('is-on', item.p === active && item.i === photo);
    });

    countEl.textContent = pad(photo + 1);
    totalEl.textContent = pad(proj.photos.length);
    descEl.textContent = proj.desc;
    roleEl.textContent = proj.meta;
    tagsEl.textContent = proj.tags;

    linksEl.innerHTML = '';
    proj.links.forEach(function (pair) {
      var a = document.createElement('a');
      a.href = pair[1];
      a.target = '_blank';
      a.rel = 'noreferrer';
      a.textContent = pair[0] + ' ↗';
      linksEl.appendChild(a);
    });
  };

  var setActive = function (i) {
    active = (i + total) % total;
    photo = 0;
    paintWheel();
    paintMedia();
  };

  var stepPhoto = function (dir) {
    var n = PROJECTS[active].photos.length;
    photo = (photo + dir + n) % n;
    paintMedia();
  };

  /* ---------- interaksi ---------- */
  names.forEach(function (el, i) {
    el.addEventListener('click', function () { setActive(i); });
    el.addEventListener('focus', function () { if (i !== active) setActive(i); });
  });

  root.querySelectorAll('[data-wk-photo]').forEach(function (btn) {
    btn.addEventListener('click', function () { stepPhoto(Number(btn.dataset.wkPhoto)); });
  });

  window.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); stepPhoto(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); stepPhoto(-1); }
  });

  /* putar wheel dengan scroll, hanya di layar lebar (halaman tidak ikut ter-scroll) */
  var lastWheel = 0;
  wheel.addEventListener('wheel', function (e) {
    if (window.matchMedia('(max-width: 1000px)').matches) return;
    /* kalau halaman memang perlu di-scroll, jangan rebut gulirannya */
    if (document.documentElement.scrollHeight > window.innerHeight + 4) return;
    e.preventDefault();
    var now = Date.now();
    if (now - lastWheel < 240) return;
    lastWheel = now;
    setActive(active + (e.deltaY > 0 ? 1 : -1));
  }, { passive: false });

  window.addEventListener('resize', measure);
  if (mqMobile.addEventListener) mqMobile.addEventListener('change', measure);
  else if (mqMobile.addListener) mqMobile.addListener(measure);

  root.setAttribute('data-wk-ready', '');
  setActive(0);
  measure();
})();
