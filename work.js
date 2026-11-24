/* =========================================================
   WORK — wheel nama proyek + galeri foto
   ---------------------------------------------------------
   Dipakai oleh work.html.
   Foto diambil dari assets/shots/<project>/; kalau diganti,
   cukup ubah isi PROJECTS[].photos (angka = placeholder CSS).
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
      fit: 'contain',
      photos: [
        'assets/shots/prodactivity/01-login.jpg',
        'assets/shots/prodactivity/02-register.jpg',
        'assets/shots/prodactivity/03-forgot-password.jpg',
        'assets/shots/prodactivity/04-reset-password.jpg',
        'assets/shots/prodactivity/17-onboarding-step-1.jpg',
        'assets/shots/prodactivity/18-onboarding-step-2.jpg',
        'assets/shots/prodactivity/05-dashboard.jpg',
        'assets/shots/prodactivity/08-activity.jpg',
        'assets/shots/prodactivity/09-add-activity.jpg',
        'assets/shots/prodactivity/10-notes.jpg',
        'assets/shots/prodactivity/11-ai-chat.jpg',
        'assets/shots/prodactivity/16-statistics.jpg',
        'assets/shots/prodactivity/07-career-analysis.jpg',
        'assets/shots/prodactivity/12-profile.jpg',
        'assets/shots/prodactivity/13-edit-profile.jpg',
        'assets/shots/prodactivity/14-settings.jpg',
        'assets/shots/prodactivity/15-search.jpg'
      ],
      links: [
        ['Repo', 'https://github.com/ProductiveActivity/ProdActivity'],
        ['Live', 'https://project-web-bersama.vercel.app']
      ]
    },
    {
      desc: 'Disaster impact map of Indonesia where every number cites its source. 514 regions, 22 years of BNPB data, a year slider, per-region panels, and a community report flow with moderator review.',
      meta: 'Frontend Developer · 2026',
      tags: 'React · TypeScript · Leaflet · Supabase',
      fit: 'contain',
      photos: [
        'assets/shots/lentera/01-peta-nasional.jpg',
        'assets/shots/lentera/02-panel-wilayah.jpg',
        'assets/shots/lentera/03-daftar-wilayah.jpg',
        'assets/shots/lentera/04-riwayat.jpg',
        'assets/shots/lentera/05-detail-kejadian.jpg',
        'assets/shots/lentera/06-transparansi.jpg',
        'assets/shots/lentera/07-bandingkan.jpg',
        'assets/shots/lentera/08-tentang.jpg',
        'assets/shots/lentera/09-lapor-warga.jpg',
        'assets/shots/lentera/10-masuk.jpg',
        'assets/shots/lentera/11-moderator.jpg',
        'assets/shots/lentera/12-lapor-form.jpg',
        'assets/shots/lentera/13-laporan-terkirim.jpg',
        'assets/shots/lentera/14-moderator-detail.jpg'
      ],
      links: [
        ['Repo', 'https://github.com/rzayyanr/lentera']
      ]
    },
    {
      desc: 'Campus life RPG built with libGDX: SNBT announcement intro, UPNVJ campus maps, NPC dialog, academic quizzes, an almamater unlock, inventory, and SQLite autosave.',
      meta: 'Game Developer · 2026',
      tags: 'Java · libGDX · SQLite · Gradle',
      fit: 'contain',
      photos: [
        'assets/shots/comps/01-menu.jpg',
        'assets/shots/comps/02-snbt-web.jpg',
        'assets/shots/comps/03-snbt-hasil.jpg',
        'assets/shots/comps/04-gameplay.jpg',
        'assets/shots/comps/05-dialog-arya.jpg',
        'assets/shots/comps/06-quiz-arya.jpg',
        'assets/shots/comps/07-quiz-benar.jpg',
        'assets/shots/comps/08-pause.jpg'
      ],
      links: [
        ['Repo', 'https://github.com/tazzz-dev/COMPS-to-Life']
      ]
    },
    {
      desc: 'Social action platform: volunteer management, donation campaigns, and impact reporting for communities.',
      meta: 'Full-Stack Developer · 2025',
      tags: 'CodeIgniter 3 · MySQL · PHP',
      fit: 'contain',
      photos: [
        'assets/shots/socialact/01-home.jpg',
        'assets/shots/socialact/02-peta-laporan.jpg',
        'assets/shots/socialact/03-form-lapor.jpg',
        'assets/shots/socialact/04-galeri-sebelum.jpg',
        'assets/shots/socialact/05-transparansi.jpg',
        'assets/shots/socialact/06-donasi.jpg',
        'assets/shots/socialact/07-volunteer.jpg',
        'assets/shots/socialact/08-login.jpg',
        'assets/shots/socialact/09-super-admin.jpg',
        'assets/shots/socialact/10-finance.jpg',
        'assets/shots/socialact/11-field-coordinator.jpg',
        'assets/shots/socialact/12-event-volunteer-admin.jpg',
        'assets/shots/socialact/13-approval-donasi.jpg'
      ],
      links: [
        ['Repo', 'https://github.com/mfaatihyusron/socialact'],
        ['Document', 'https://drive.google.com/file/d/1mlVLPcdQsDg9bWOSuAPvfsQ5b9rIk16E/view']
      ]
    },
    {
      desc: 'Restaurant menu ordering via QR code: POS, stock, table numbers, and cashier accounts, plus self-service for guests.',
      meta: 'Full-Stack Developer · 2025',
      tags: 'CodeIgniter 3 · MySQL · PHP',
      fit: 'contain',
      photos: [
        'assets/shots/restoapp/01-login.jpg',
        'assets/shots/restoapp/02-register.jpg',
        'assets/shots/restoapp/03-forgot-password.jpg',
        'assets/shots/restoapp/04-stok-menu.jpg',
        'assets/shots/restoapp/05-denah-meja.jpg',
        'assets/shots/restoapp/06-daftar-pesanan.jpg',
        'assets/shots/restoapp/07-riwayat-income.jpg',
        'assets/shots/restoapp/08-kelola-users.jpg',
        'assets/shots/restoapp/09-self-service.jpg',
        'assets/shots/restoapp/10-checkout-modal.jpg',
        'assets/shots/restoapp/11-konfirmasi-bayar.jpg',
        'assets/shots/restoapp/12-pesanan-dibuat.jpg',
        'assets/shots/restoapp/13-detail-pesanan.jpg',
        'assets/shots/restoapp/14-cashier-pesanan.jpg',
        'assets/shots/restoapp/15-guest-self-service.jpg',
        'assets/shots/restoapp/16-tambah-menu.jpg'
      ],
      links: [
        ['Repo', 'https://github.com/tazzz-dev/resto-app'],
        ['Document', 'https://drive.google.com/file/d/1llr6OYW9KATH3qa5okMk4BIHrS4VumBy/view']
      ]
    },
    {
      desc: 'Classic Snake written in C++: terminal grid, keyboard input, growing tail, and a Makefile build.',
      meta: 'Game Developer · 2025',
      tags: 'C++ · Makefile',
      photos: [
        'assets/shots/snake-short.png',
        'assets/shots/snake-medium.png',
        'assets/shots/snake-long.png'
      ],
      links: [
        ['Repo', 'https://github.com/tazzz-dev/snake-classic']
      ]
    },
    {
      desc: 'Two-player Pong in C++: paddle movement, ball physics, scoring, and a Makefile build.',
      meta: 'Game Developer · 2025',
      tags: 'C++ · Makefile',
      photos: [
        'assets/shots/pong-gameplay.png',
        'assets/shots/pong-paused.png'
      ],
      links: [
        ['Repo', 'https://github.com/tazzz-dev/pong-classic']
      ]
    },
    {
      desc: 'UI/UX case study of a livestock-management app for novice farmers: field research, design thinking, high-fidelity Figma prototype, and Maze usability testing with 16 respondents.',
      meta: 'System Analyst & UI/UX · 2024',
      tags: 'Figma · Design Thinking · Maze',
      photos: [
        'assets/shots/barne/cover.png',
        'assets/shots/barne/research.png',
        'assets/shots/barne/information-architecture.png',
        'assets/shots/barne/wireframe.png',
        'assets/shots/barne/ui-core-1.png',
        'assets/shots/barne/ui-core-2.png',
        'assets/shots/barne/iteration.png'
      ],
      links: [
        ['Prototype', 'https://www.figma.com/proto/Pu7LM8RnHtDqDeF7YktIHU/Apk-BarnE?node-id=131-1595&starting-point-node-id=131%3A1595'],
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
  var lane = root.querySelector('.wk-list');
  var names = Array.prototype.slice.call(root.querySelectorAll('.wk-name'));
  var photosBox = root.querySelector('[data-wk-photos]');
  var descEl = root.querySelector('[data-wk-desc]');
  var roleEl = root.querySelector('[data-wk-role]');
  var tagsEl = root.querySelector('[data-wk-tags]');
  var linksEl = root.querySelector('[data-wk-links]');
  var countEl = root.querySelector('[data-wk-count]');
  var totalEl = root.querySelector('[data-wk-total]');
  var navBtns = Array.prototype.slice.call(root.querySelectorAll('.wk-nav'));
  var counterEl = root.querySelector('.wk-count');

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
    proj.photos.forEach(function (item, i) {
      var el = document.createElement('div');
      el.className = 'wk-photo';

      if (typeof item === 'number') {
        /* masih placeholder: komposisi CSS */
        el.innerHTML = '<div class="w-art w-art--' + item + '" aria-hidden="true">' +
          '<span class="w-art-n">' + pad(p + 1) + '</span></div>';
      } else {
        var img = document.createElement('img');
        img.src = item;
        img.alt = '';
        img.loading = 'lazy';
        img.decoding = 'async';
        if (proj.fit) {
          img.style.objectFit = proj.fit;
          img.style.objectPosition = 'center';
        }
        el.appendChild(img);
      }

      photosBox.appendChild(el);
      allPhotos.push({ el: el, p: p, i: i });
    });
  });

  var measure = function () {
    var h = lane.clientHeight || 620;
    gap = Math.max(82, Math.min(126, h / 5.1));
    gapX = Math.min(lane.clientWidth * 0.52, 240);
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

    dots.forEach(function (btn, i) {
      var on = i === active;
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-current', on ? 'true' : 'false');
    });
  };

  var paintMedia = function () {
    var proj = PROJECTS[active];

    allPhotos.forEach(function (item) {
      item.el.classList.toggle('is-on', item.p === active && item.i === photo);
    });

    countEl.textContent = pad(photo + 1);
    totalEl.textContent = pad(proj.photos.length);

    /* satu foto → tombol geser & counter tidak perlu */
    var single = proj.photos.length < 2;
    navBtns.forEach(function (btn) { btn.hidden = single; });
    if (counterEl) counterEl.hidden = single;

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

  var dots = Array.prototype.slice.call(root.querySelectorAll('[data-wk-to]'));
  dots.forEach(function (btn) {
    btn.addEventListener('click', function () { setActive(Number(btn.dataset.wkTo)); });
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
  lane.addEventListener('wheel', function (e) {
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
