# Archive

These files are retained for reference and restoration. They are not used by the current root static website. No archived content was deleted or edited during the move.

| Folder | Contents |
| --- | --- |
| `jekyll/` | Former Jekyll data, layouts, templates, collections, plugins, SCSS/JS sources, configuration and build/deployment files. |
| `generated/_site/` | Old generated website snapshot. |
| `legacy-site/` | Pages not linked from the current website: Docs, Funding, News, Software, PapersByYear, Medium posts and tutorials, plus old paper/project pages and a test page. |
| `legacy-root/` | Former root pages, feeds, sitemap, Markdown sources and historical notes. |
| `references/` | Original SigM introduction slide deck. |

`moves.json` records every original path, archive destination and SHA-256 hash. To restore an item, move it from `to` back to `from`, after checking that the destination is free. Restore the original structure before trying the legacy Jekyll build.

Archived HTML is preserved as historical source. Its root-relative links still refer to the original site structure; the archive is not a separately functioning website. Former public URLs for moved legacy pages are no longer served at their old paths. Active page URLs and assets remain in place.

With the current `.nojekyll` deployment, `archive/` is a regular repository folder and is not access-controlled.
