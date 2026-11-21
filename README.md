# portofolio-v2

Personal portfolio of Muhammad Mumtaaz — fullstack developer, game developer, robotics enthusiast.

Static site: plain HTML, CSS and JavaScript. No framework, no build dependencies.

## Structure

```
index.html            generated page (do not edit by hand)
build.js              assembles index.html from sections/
styles.css            all styles
scroll.css            scroll-reveal layer
script.js             nav, marquee, small interactions
scroll.js             scroll reveal controller
sections/
  header.html
  loader.html         first-load screen (mini grid + grid reveal)
  hero.html
  journey.html
  tools.html
  project/p3-bento.html
  lets-talk.html
  footer.html
assets/profile/       portrait used by the hero
```

## Editing

Edit files in `sections/`, then rebuild:

```sh
node build.js
```

That writes `index.html`. Open it directly in a browser; no server needed.

## Notes

- The scrollbar is hidden on purpose (`styles.css`); the page still scrolls with wheel, trackpad and keyboard.
- The loader runs once per page load, respects `prefers-reduced-motion`, and is skipped when the tab opens in the background.
- All ornaments are CSS/SVG; the only image is the portrait.
