# SigM Lab

Signal Processing, Information and Multimedia Laboratory, Hanoi University of Science and Technology (HUST).

## Updating the public site

The repository root is the static site served by GitHub Pages (`.nojekyll`). Edit `index.html`, `team/index.html`, `research/index.html`, `student-topics/index.html`, `projects/index.html`, `datasets/index.html`, `about.html` and shared fragments in `includes/`. Preview with `python -m http.server 8000` from this directory.

`team.html` redirects to the maintained `/team/` page.

## Folder structure

- `assets/`: images, logos, fonts, stylesheets, scripts and PDFs used by the website.
- `includes/`: shared navigation and footer loaded by the static pages.
- `team/`, `research/`, `student-topics/`, `projects/`, `datasets/`, `papers/`: maintained public pages. Keep `papers/papers.js`, `papers/papers.css` and `papers/papers-data.json` together.
- `archive/`: retained material outside the current site navigation; see [archive inventory](archive/README.md).

Keep `.nojekyll` at the repository root so GitHub Pages serves the static HTML directly. No Jekyll build is needed. Do not publish `archive/generated/_site/` as the live site.

## Content reference

Updated from `archive/references/2025-SigM_SEEE-student-2026ver.pptx`: lab identity/location (slide 1), research (3–4), projects (5–6), members (7), student topics and contacts (8–27), outputs (28). New member portraits are extracted from slide 7. Student counts describe that introduction, not a live enrollment count. Existing student and invited-researcher profiles are retained because the slides do not give a replacement roster.

Slide 5 gives conflicting 2022–2024 and 2022–2026 periods for the ultrasound project; the project page explicitly flags this. Slides 5–6 do not establish project completion status, so projects are grouped by leading/participating role. Research under review or in preparation is not added as a published paper. Network logos in slides 31–32 do not establish specific agreements and are not converted into partnership claims.

## License

[MIT](https://opensource.org/licenses/MIT). The site retains elements from earlier Jekyll Bootstrap / Drummond Lab / Niemeyer Research Group templates.
