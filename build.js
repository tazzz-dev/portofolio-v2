/* =========================================================
   BUILD — merakit halaman dari potongan per bagian
   ---------------------------------------------------------
   node build.js

   Sumber yang diedit:
     sections/header.html     → header
     sections/loader.html     → loading pertama
     sections/hero.html       → hero
     sections/journey.html    → The Journey
     sections/tools.html      → Tools & Tech
     sections/project/p3-bento.html → proyek (Bento)
     sections/lets-talk.html  → Let's Talk
     sections/footer.html     → footer

   Yang dihasilkan (jangan diedit langsung):
     index.html → halaman portofolio
   ========================================================= */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8').trim();

const shell = ({ title, desc, body, header = '', loader = '' }) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
<meta name="description" content="${desc}" />
<meta name="theme-color" content="#0B111C" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="styles.css" />
<link rel="stylesheet" href="scroll.css" />
<noscript><style>
  [data-sa] .sa-inner { clip-path: none !important; }
  [data-sa] [data-sa-reveal] > *, [data-sa] [data-sa-stagger] > *,
  [data-sa] [data-sa-block], [data-sa] .sa-mask-i {
    opacity: 1 !important; transform: none !important; translate: none !important;
  }
  .ld { display: none !important; }
  html.is-loading, html.is-loading body { overflow: auto !important; }
</style></noscript>
</head>
<body>

<div class="grain" aria-hidden="true"></div>
${loader ? `\n${loader}\n` : ''}
${header ? `\n${header}\n` : ''}
<main id="top">
${body}
</main>

<script src="script.js"></script>
<script src="scroll.js"></script>
</body>
</html>
`;

const header = read('sections/header.html');
const loader = read('sections/loader.html');
const hero = read('sections/hero.html');
const journey = read('sections/journey.html');
const tools = read('sections/tools.html');
const projects = read('sections/project/p3-bento.html');
const letsTalk = read('sections/lets-talk.html');
const footer = read('sections/footer.html');

const html = shell({
  title: 'Muhammad Mumtaaz · Fullstack Developer',
  desc: "Portofolio Muhammad Mumtaaz · Fullstack Developer, Game Developer, Robotics Enthusiast. I explore what exists, imagine what doesn't, and build what's next.",
  loader,
  header,
  body: [hero, journey, tools, projects, letsTalk, footer]
    .join('\n\n')
    .replace(/\{\{base\}\}/g, ''),
});

fs.writeFileSync(path.join(ROOT, 'index.html'), html.replace(/\r\n/g, '\n'), 'utf8');
console.log('✓ index.html');
