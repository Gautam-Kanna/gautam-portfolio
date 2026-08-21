# Gautam Kannapiran — Portfolio

A single-page portfolio site built from Gautam's résumé: summary, work
experience, projects, skills, education, and contact — plain HTML, CSS, and
JavaScript, no frameworks or build step.

## Structure

```
index.html          all page content
css/style.css        design tokens, layout, both light and dark themes
js/script.js          theme toggle, mobile nav, scroll-reveal
assets/headshot.jpg    profile portrait
assets/*.pdf            downloadable résumé (linked from the "Résumé" button)
```

## Running it locally

No build step - just open `index.html` in a browser, or serve the folder
so relative paths behave exactly like they will once hosted:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing it for free with GitHub Pages

Once this is pushed to a GitHub repository:

1. On the repo's page, go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to "Deploy from a branch".
3. Set **Branch** to `main` (or `master`) and folder to `/ (root)`, then **Save**.
4. GitHub gives you a live URL a minute or two later, typically
   `https://<your-username>.github.io/<repo-name>/`.

Any time you push a change to that branch, the live site updates
automatically within a minute or so.

## Design notes

The palette (deep charcoal-plum background, warm copper accent) was pulled
directly from the portrait rather than picked generically - Fraunces
carries the personal/editorial layer (name, headings), IBM Plex Sans
handles body copy, and IBM Plex Mono is used for anything data-like
(dates, stats, tech tags) as a nod to the "backend developer" subject.

The site defaults to dark and includes a light/dark toggle in the nav
(top right) that remembers the visitor's choice.

## Updating the content later

- **Résumé PDF**: replace `assets/Gautam_Kannapiran_Resume.pdf` with a new
  export, keeping the same filename (or update the `href` in `index.html`'s
  nav and mobile-nav "Résumé" links if you rename it).
- **Headshot**: replace `assets/headshot.jpg` with another image of the
  same rough aspect ratio (portrait, ~5:6) for the best crop in the hero.
- **Text content**: everything (summary, experience bullets, project
  descriptions, skills) lives directly in `index.html` - no CMS or data
  file, just edit the HTML.
"# gautam-portfolio" 
