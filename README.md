# SigM Lab

Signal Processing, Information and Multimedia Laboratory, Hanoi University of Science and Technology (HUST).

## Updating the public site

The repository root is the static site served by GitHub Pages (`.nojekyll`). Edit `index.html`, `team/index.html`, `research/index.html`, `projects/index.html`, `datasets/index.html`, `about.html` and shared fragments in `includes/`. Preview with `python -m http.server 8000` from this directory.

`_site/` contains an older generated copy; it is not the root site. Legacy Jekyll files remain in the repository. `team.html` redirects to the maintained `/team/` page.

## Content reference

Updated from `references/2025-SigM_SEEE-student-2026ver.pptx`: lab identity/location (slide 1), research (3–4), projects (5–6), members (7), student topics and contacts (8–27), outputs (28). New member portraits are extracted from slide 7. Student counts describe that introduction, not a live enrollment count. Existing student and invited-researcher profiles are retained because the slides do not give a replacement roster.

Slide 5 gives conflicting 2022–2024 and 2022–2026 periods for the ultrasound project; the project page explicitly flags this. Slides 5–6 do not establish project completion status, so projects are grouped by leading/participating role. Research under review or in preparation is not added as a published paper. Network logos in slides 31–32 do not establish specific agreements and are not converted into partnership claims.

## License

[MIT](https://opensource.org/licenses/MIT). The site retains elements from earlier Jekyll Bootstrap / Drummond Lab / Niemeyer Research Group templates.
