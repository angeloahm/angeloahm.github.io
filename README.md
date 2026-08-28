# angeloahm.github.io

Personal academic website — Angelo Mendes, Department of Economics, University of Minnesota.
Live at <https://angeloahm.github.io>.

Plain static HTML + CSS. No build step, no dependencies: edit a file, commit, push, and
GitHub Pages serves it within a minute.

## Files

| Path              | What it is                                  |
| ----------------- | ------------------------------------------- |
| `index.html`      | Home — bio, research interests, links       |
| `research.html`   | Job market paper, working papers, publications |
| `teaching.html`   | Teaching experience                         |
| `css/style.css`   | All styling. UMN maroon `#7A0019` is set once, as `--maroon` at the top |
| `js/theme.js`     | Light/dark toggle. The no-flash initializer is inline in each page's `<head>` |
| `img/photo.jpg`   | Profile photo (square crop works best)      |
| `files/`          | CV, papers, and slides (see below)           |

## Files in `files/`

| File                             | What                                        |
| -------------------------------- | ------------------------------------------- |
| `CV_Angelo_Mendes.pdf`           | CV (Fall 2026)                              |
| `Transparency_Crises.pdf`        | Transparency in Debt Crises — paper         |
| `Transparency_Crises_Slides.pdf` | Transparency in Debt Crises — Midwest Macro slides |
| `LMT_Opaqueness.pdf`             | Opaqueness and Liquidity in OTC Markets — paper |
| `LMT_Opaqueness_Slides.pdf`      | Opaqueness and Liquidity in OTC Markets — slides |
| `CMP_ET_2024.pdf`                | Entrepreneurship and Misallocation — Economic Theory 2024 |

Still missing: the job market paper PDF, and the Domestic vs. Foreign Law paper
(served on the old site as `Recovery_rates.pdf`).

## Editing

To add a paper, copy an existing `<article class="paper">` block in `research.html`.
The paper's title is the link to its PDF — wrap it as
`<h3 class="paper__title"><a href="files/Name.pdf">Title</a></h3>`. The button row
below is only for extras: Slides, SSRN, Journal.
To add a course, copy a `<div class="course">` block in `teaching.html`.
Placeholder links are left as HTML comments (`<!-- ... -->`) — uncomment and fill in
the URL when you have it.

## Local preview

    python -m http.server 8000

then open <http://localhost:8000>.
