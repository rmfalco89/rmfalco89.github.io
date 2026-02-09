# Portfolio Website

Professional portfolio website showcasing software engineering projects.

## 🚀 Quick Deploy to GitHub Pages

### 1. Create GitHub Repository

```bash
# Initialize git repo (if not already done)
cd /Users/rmarino/.openclaw/workspace/portfolio-site
git init
git add .
git commit -m "Initial commit: Portfolio website"

# Create repo on GitHub (replace 'yourusername' with your GitHub username)
gh repo create yourusername.github.io --public --source=. --remote=origin
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/yourusername/yourusername.github.io`
2. Click **Settings** → **Pages**
3. Under **Source**, select **main** branch and **/ (root)** folder
4. Click **Save**
5. Your site will be live at: `https://yourusername.github.io`

**That's it!** GitHub Pages will automatically build and deploy your site.

---

## 📋 Before Deployment Checklist

### 1. Update LinkedIn Profile Link

In `index.html`, update:
```html
<a href="https://linkedin.com/in/riccardo-marino" target="_blank">LinkedIn</a>
```
Replace with your actual LinkedIn username.

### 2. Verify GitHub Username

All project links point to `rmfalco89`. If your GitHub username is different, update all repository links in:
- `index.html` (project cards)
- Individual project pages in `projects/`

---

## 🎨 Customization

### Colors

Edit `css/style.css` to change the color scheme:
```css
:root {
  --primary: #2563eb;      /* Main accent color */
  --accent: #10b981;       /* Secondary accent */
  --bg-main: #0f172a;      /* Background */
  --bg-card: #1e293b;      /* Card background */
}
```

### Content

- **Landing page:** Edit `index.html`
- **Project pages:** Edit files in `projects/` directory
- **Styling:** Modify `css/style.css`

---

## 🌐 Alternative Deployment Options

### Vercel (Recommended for advanced features)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /Users/rmarino/.openclaw/workspace/portfolio-site
vercel
```

### Netlify

1. Drag and drop the entire `portfolio-site` folder to [app.netlify.com](https://app.netlify.com)
2. Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

### Cloudflare Pages

1. Connect your GitHub repo at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Set build command: (none)
3. Set publish directory: `/`

---

## 📁 Project Structure

```
portfolio-site/
├── index.html              # Landing page with project showcase
├── css/
│   └── style.css           # All styling (dark theme, responsive)
├── projects/               # Individual project pages
│   ├── sump-pump-control.html
│   ├── esp-project-template-architecture.html
│   ├── esp-project-template-ota.html
│   ├── stocks-eval.html
│   ├── telegram-utils.html
│   └── smarter-home-webserver.html
├── thanks.html             # Form submission thank you page
└── README.md               # This file
```

---

## 💡 Tips

- **Custom Domain:** Add a `CNAME` file with your domain (e.g., `riccardo.dev`)
- **Analytics:** Add Google Analytics or Plausible tracking script to `index.html`
- **SEO:** Each page already has basic meta tags. Add more in `<head>` sections.
- **Sitemap:** Generate with: `npm install -g sitemap-generator-cli && sitemap-generator https://yourusername.github.io`

---

## 🔒 Security Notes

- Contact via mailto: link (no backend needed)
- Agent-monitored email responds within minutes
- All static files (HTML/CSS only, no sensitive data)
- HTTPS automatically enabled via GitHub Pages

---

## 📧 Contact

For questions or issues, reach out via:
- Email: rmfalco89@gmail.com
- GitHub: [@rmfalco89](https://github.com/rmfalco89)

---

Built with ❤️ by Riccardo Marino
