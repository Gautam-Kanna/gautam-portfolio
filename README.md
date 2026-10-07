# Gautam Kanna — Quant Trader Portfolio

A single-page portfolio site for a quantitative trader: summary, crypto stat arb project, quant skills, education, and contact — plain HTML, CSS, and JavaScript, no frameworks or build step.

**Live site**: [gautam-kanna.github.io/gautam-portfolio](https://gautam-kanna.github.io/gautam-portfolio)

## What's New (Quant Focus)

This portfolio now emphasizes:
- **Crypto Momentum & Reversal Statistical Arbitrage** — the main project (out-of-sample backtest: 9.8% annual return, 0.745 Sharpe ratio)
- **Quant skills** — statistical arbitrage, signal research, machine learning, regime detection, backtesting, risk management
- **Technical depth** — realistic trading costs, out-of-sample validation, Python data pipelines (Pandas, NumPy, Matplotlib), Binance API
- **Clean design** — professional, dark/light theme toggle, responsive mobile layout

## Structure

```
index.html              all page content (quant-focused)
css/style.css            design tokens, layout, light + dark themes
js/script.js             theme toggle, mobile nav, scroll reveal
assets/headshot.jpg      profile portrait
assets/Gautam_Kanna_Quant_Resume.pdf    downloadable quant resume (linked from nav)
```

## Sections

1. **Navigation** — About, Projects, Skills, Education, Contact, Résumé download, theme toggle
2. **Hero** — Name, title (Quantitative Trader), tagline, brief intro
3. **About** — Background, transition to quant, strategy development philosophy
4. **Projects** — Crypto momentum/reversal strategy with full methodology, results, links
5. **Skills** — Quant & Trading (stat arb, signal research, ML, regime detection, etc.), Programming (Python/Pandas/NumPy, Git, SQL, Java), Trading & Data (Binance API, time series, etc.)
6. **Education** — Wall Street Quants bootcamp (completed), B.Sc. Computer Science (York, Dean's List), relevant coursework (Linear Algebra, Statistics, Calculus)
7. **Contact** — Email, phone, GitHub, location

## Running It Locally

No build step — just open `index.html` in a browser, or serve the folder for proper relative paths:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing with GitHub Pages

1. Push this repo to GitHub (if not already done)
2. Go to **Settings → Pages**
3. Set **Source** to "Deploy from a branch"
4. Set **Branch** to `main` (or `master`) and folder to `/ (root)`
5. Save — GitHub will give you a live URL within 1–2 minutes

URL pattern: `https://<username>.github.io/<repo-name>/`

Any push to `main` updates the live site automatically within a minute.

## Updating Content

### Résumé PDF
Replace `assets/Gautam_Kanna_Quant_Resume.pdf` with a new export. Keep the filename or update the `href` in `index.html`'s nav links if you rename it.

### Headshot
Replace `assets/headshot.jpg` with a new image (portrait aspect ratio, ~5:6, for best crop in the hero).

### Text Content
All content (about, projects, skills, education, contact) lives in `index.html` — edit the HTML directly. No CMS or data file needed.

## Design

**Theme**: Dark mode by default (deep charcoal bg, warm copper/gold accent), with light mode toggle in the top right. Theme preference is saved to browser localStorage and respects system preference.

**Fonts**:
- **Fraunces** (serif) — name, headings, editorial layer
- **IBM Plex Sans** — body copy
- **IBM Plex Mono** — dates, stats, tech tags (nods to trading/data work)

**Colors**:
- Dark: `#0f1419` bg, `#d4a574` accent (copper/gold)
- Light: `#f9f7f4` bg, `#b8860b` accent (darker gold)

**Responsive**: Mobile-first design with hamburger menu on smaller screens, adapts gracefully to tablet and desktop.

## Features

✅ Dark/light theme toggle (remembered in localStorage)  
✅ Smooth scroll navigation  
✅ Mobile-responsive hamburger menu  
✅ Fade-in reveal on scroll  
✅ No frameworks, build step, or external dependencies  
✅ ATS-friendly (plain HTML, no images in resume-critical text)  
✅ Fast load time (single-page, ~50KB total)

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Requires CSS Grid, Flexbox, ES6 JavaScript.

## Contact

Email: gautamkanna.exp@gmail.com  
Phone: +1 (647) 864-4259  
GitHub: [github.com/Gautam-Kanna](https://github.com/Gautam-Kanna)  
Location: Brampton, Ontario, Canada
