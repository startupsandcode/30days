# 30 Sites in 30 Days

**Live:** https://30days.johnmann.work

My 30-day challenge: **30 sites in 30 days** — rebuilt in 2026.

Every site is hand-built with **vanilla JavaScript** — no frameworks, no build step, no bundler. Each site is a single self-contained `index.html`. Inspired by [JavaScript30](https://javascript30.com/).

This repo started in 2023 with a Gulp-based scaffold (see `src/`, kept for history). The finished challenge lives in [`site/`](site/) and is deployed on Vercel.

## The 30 sites

| # | Site | What it is |
|---|------|-----------|
| 01 | [agency](site/agency/) | Digital agency landing — animated hero, cursor glow, scroll reveals |
| 02 | [bb19](site/bb19/) | BB-19 BeatBox — 16-step drum sequencer on the Web Audio API |
| 03 | [beverage](site/beverage/) | Coffee house — interactive drink builder with live pricing |
| 04 | [blog](site/blog/) | Blog — live search, tag filters, reading progress |
| 05 | [book](site/book/) | Author page — 3D book tilt, typewriter chapter sampler |
| 06 | [candy](site/candy/) | Candy shop — working cart with flying-to-cart animation |
| 07 | [celebrity](site/celebrity/) | Fan page — trivia quiz with score and streaks |
| 08 | [charity](site/charity/) | Charity — donation impact calculator, animated goal meter |
| 09 | [club](site/club/) | Nightclub — RSVP with live guest list (localStorage) |
| 10 | [cruise](site/cruise/) | Cruise line — itinerary explorer, fare estimator |
| 11 | [email](site/email/) | Newsletter — validated signup, confetti, template preview |
| 12 | [event](site/event/) | Event invite — live countdown clock, one-click RSVP |
| 13 | [fashion](site/fashion/) | Lookbook — filterable gallery, quick-view modal |
| 14 | [game](site/game/) | Whack-a-mole — score, timer, persistent high score |
| 15 | [gardener](site/gardener/) | Plant care — watering scheduler with localStorage |
| 16 | [menu](site/menu/) | Restaurant — type-ahead search, categories, cart |
| 17 | [mobileService](site/mobileService/) | Phone repair — instant price calculator, booking form |
| 18 | [movie](site/movie/) | Film page — fully custom-built video player on canvas |
| 19 | [parallax](site/parallax/) | Parallax scrolling demo — layered depth, slide-in sections |
| 20 | [penny](site/penny/) | Penny jar — savings tracker with local persistence |
| 21 | [photographer](site/photographer/) | Portfolio — keyboard-navigable lightbox gallery |
| 22 | [portfolio](site/portfolio/) | Dev portfolio — typing hero, dark mode, CSS-variables playground |
| 23 | [printing](site/printing/) | Print shop — live quote calculator |
| 24 | [product](site/product/) | Product landing — variant customizer, sticky nav |
| 25 | [recipes](site/recipes/) | Recipe finder — search + time/difficulty filters |
| 26 | [shop](site/shop/) | E-shop — persistent cart, checkout modal |
| 27 | [speaker](site/speaker/) | Speaker page — interactive schedule timeline |
| 28 | [tourist](site/tourist/) | NYC guide — attraction explorer, itinerary builder |
| 29 | [toy](site/toy/) | Toy store — canvas cursor trail, playful cart |
| 30 | [weight](site/weight/) | Weight tracker — canvas chart, local history |

## Run it locally

No build step. Serve the `site/` directory with any static server:

```bash
cd site && python3 -m http.server 8000
```

## Deploy

Connected to Vercel (`30days` project, `site/` as root directory). Pushes to `master` auto-deploy.
