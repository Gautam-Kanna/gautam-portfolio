# Gautam Kanna Kannapiran — Portfolio

A single-page portfolio site for my résumé, projects, and certifications. Plain HTML, CSS, and JavaScript — no frameworks and no build step.

## Structure

```
index.html                       all page content
css/style.css                    design tokens, layout, animations
js/script.js                     typing effect, scroll reveal, particles, tilt
assets/Gautam_Kanna_Kannapiran_AIML.pdf   downloadable résumé
assets/eightcap-certificate.png  Eightcap Challenges certificate
```

## Running it locally

No build step. Open `index.html` in a browser, or serve the folder so relative paths work the same as they will once hosted:

```
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing with GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch".
4. Set **Branch** to `main` and the folder to `/ (root)`, then **Save**.
5. GitHub gives you a live URL, typically `https://<username>.github.io/<repo-name>/`.

Pushes to `main` update the live site within a minute or so.

## Updating content

- **Text** (summary, experience, projects, skills, certifications): edit `index.html` directly. There is no CMS or data file.
- **Résumé:** replace `assets/Gautam_Kanna_Kannapiran_AIML.pdf` with a new export. Keep the same filename, or update the `href` links in `index.html`.
- **Projects:** each project is an `<a class="project">` block in the Projects section. Copy one to add a project, and change the link.
- **Colors:** edit the variables at the top of `css/style.css`.

## Contact

- Email: gautamkanna2@gmail.com
- GitHub: https://github.com/Gautam-Kanna
- Location: Brampton, ON
