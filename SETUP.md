# Deploy Your Quant Portfolio to GitHub

## Files Included
- `index.html` — Updated with quant profile (all content changed, same design)
- `css/style.css` — Original beautiful styling (unchanged)
- `js/script.js` — Original interactions (unchanged)
- `assets/Gautam_Kanna_Quant_Resume.docx` — Your quant resume

## One More Step: Resume Format

The portfolio links to a PDF resume. You have two options:

### Option A: Convert DOCX to PDF (Recommended)
1. Open `Gautam_Kanna_Quant_Resume.docx` in Microsoft Word or Google Docs
2. Export/Save as PDF: `Gautam_Kanna_Quant_Resume.pdf`
3. Place it in the `assets/` folder (same location as the .docx)

### Option B: Keep the DOCX
If you prefer, just rename the file in two places in `index.html`:
- Line 32: `href="assets/Gautam_Kanna_Quant_Resume.docx"`
- Line 43: `href="assets/Gautam_Kanna_Quant_Resume.docx"`

## Deploy to GitHub

1. **Clone your repo locally** (if not already):
   ```bash
   git clone https://github.com/Gautam-Kanna/gautam-portfolio.git
   cd gautam-portfolio
   ```

2. **Copy the updated files** into your repo:
   ```bash
   # Replace existing files
   cp index.html .
   cp css/style.css css/
   cp js/script.js js/
   cp assets/Gautam_Kanna_Quant_Resume.pdf assets/  # (or .docx if you go with Option B)
   ```

3. **Add your headshot** (if not already there):
   ```bash
   cp path/to/your/headshot.jpg assets/headshot.jpg
   ```

4. **Commit & Push**:
   ```bash
   git add .
   git commit -m "Update portfolio for quant profile — crypto momentum strategy, quant skills, WSQ bootcamp"
   git push origin main
   ```

5. **Enable GitHub Pages** (if not already set up):
   - Go to repo **Settings → Pages**
   - Set **Source** to "Deploy from a branch"
   - Set **Branch** to `main` and folder to `/ (root)`
   - Save
   - Your site will be live at `https://gautam-kanna.github.io/gautam-portfolio/`

## What Changed in the Portfolio

✅ **Hero section**: Role updated to "Quantitative Trader", summary now focuses on quant research  
✅ **Stats**: Now shows 9.8% return, 0.745 Sharpe, -12.3% drawdown, -0.015 beta  
✅ **Experience**: Updated to show WSQ bootcamp, full-time quant transition, and relevant backend experience  
✅ **Projects**: Now showcases only your Crypto Momentum & Reversal Strategy with full methodology and results  
✅ **Skills**: All backend skills replaced with quant specialties (stat arb, mean reversion, ML models, regime detection, etc.)  
✅ **Education**: Added Wall Street Quants bootcamp; highlighted relevant coursework (Linear Algebra, Statistics, Calculus)  
✅ **Contact CTA**: Updated to "Let's build alpha together"  

## Design Preserved

🎨 All original styling, colors, typography, animations, dark/light theme toggle, and responsive design remain **exactly the same**.  
Only the content inside the beautifully designed sections has been updated to reflect your quant profile.

---

Questions? Email: gautamkanna.exp@gmail.com
