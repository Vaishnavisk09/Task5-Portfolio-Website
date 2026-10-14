# Vaishnavi Kadam — Personal Developer Portfolio

> A complete, responsive personal portfolio website built with HTML5, CSS3, and vanilla JavaScript.  
> Designed for GitHub Pages deployment as part of my Web Development Internship — Task 5.

---

## 🌐 Live Site

> **Note:** The live URL will be available after you complete the GitHub Pages deployment steps below.  
> Format: `https://vaishnavisk09.github.io/Task5-Website`  
> *(or `https://vaishnavisk09.github.io/` if you use the special username repository)*

---

## ✨ Features

- **Sticky navigation bar** with blur effect and active-link highlighting
- **Animated hero section** with floating initials avatar, code cards, and tech badges
- **About section** with personal info cards and education details
- **"What I Do" cards** covering Frontend, Programming, and Project Building
- **Skills showcase** with animated cards (no fake percentage bars)
- **Projects section** with 4 project cards and clearly documented placeholder links
- **Contact section** with mailto link and GitHub profile (no fake form backend)
- **Footer** with auto-updated copyright year
- **Back-to-top button**
- **Hamburger mobile menu** with keyboard and outside-click dismissal
- **Scroll reveal animations** via IntersectionObserver
- **Fully responsive**: tested at 375px, 480px, 768px, 1024px, and desktop widths
- **Accessible**: ARIA labels, visible focus states, reduced-motion support
- **SEO-ready**: meta title, description, Open Graph tags, semantic HTML
- **Inline SVG favicon** — works without a separate image file
- **No dependencies** — no frameworks, no build tools, no npm required

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Design system, animations, responsive layout |
| Vanilla JavaScript | Interactivity, scroll effects, navigation |
| Google Fonts | Inter, DM Serif Display, JetBrains Mono |
| IntersectionObserver API | Scroll-triggered reveal animations |
| CSS Custom Properties | Design tokens for consistent theming |

---

## 📁 Folder Structure

```
Task5-Website/
├── index.html       ← Main HTML page (all sections)
├── style.css        ← Complete stylesheet with design system
├── script.js        ← Vanilla JS (nav, scroll, animations)
└── README.md        ← This file
```

No build step, no node_modules, no package.json — just open and go.

---

## 🖥️ Run Locally

### Option 1 — Open directly in a browser
1. Navigate to the project folder on your computer
2. Double-click `index.html`  
   *(The site works fully offline from the file system)*

### Option 2 — VS Code Live Server (recommended)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. The site opens at `http://127.0.0.1:5500`

### Option 3 — Python HTTP server
```bash
# Python 3
python -m http.server 8080
# Then open http://localhost:8080
```

### Option 4 — Node.js serve
```bash
npx serve .
# Then open the URL shown in the terminal
```

---

## 🚀 Deploy to GitHub Pages

### Step 1 — Create a GitHub Repository

Go to [github.com/new](https://github.com/new) and create a **public** repository.

> **Two options for GitHub Pages:**
>
> **Option A — Project Repository** (recommended for this task)  
> Name it anything, e.g. `Task5-Website`  
> Your site URL will be: `https://vaishnavisk09.github.io/Task5-Website`
>
> **Option B — Special Username Repository**  
> Name it exactly `vaishnavisk09.github.io`  
> Your site URL will be: `https://vaishnavisk09.github.io`  
> *(You can only have one of these per account)*

---

### Step 2 — Push Your Project Using Git

Open **Git Bash**, **PowerShell**, or **Command Prompt** inside your project folder.

```bash
# 1. Initialize git in the project folder
git init

# 2. Add all files to staging
git add .

# 3. Make your first commit
git commit -m "Initial commit: Add portfolio website"

# 4. Rename the default branch to 'main'
git branch -M main

# 5. Connect to your GitHub repository
#    Replace YOUR-REPO-NAME with the actual repository name you created
git remote add origin https://github.com/vaishnavisk09/YOUR-REPO-NAME.git

# 6. Push to GitHub
git push -u origin main
```

**Example for Option A (Task5-Website):**
```bash
git remote add origin https://github.com/vaishnavisk09/Task5-Website.git
git push -u origin main
```

---

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top-right tab of the repo)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:  
   - Branch: `main`  
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1–3 minutes
7. GitHub will display your live URL:  
   `https://vaishnavisk09.github.io/Task5-Website`

---

### Step 4 — Update Project Links (Important!)

After creating your individual project repositories, update the placeholder links in `index.html`:

```html
<!-- Find these sections in index.html and update href values: -->

<!-- Lumora Landing Page -->
<a href="https://github.com/vaishnavisk09/lumora-landing-page" ...>Source Code</a>

<!-- Bloom To-Do List -->
<a href="https://github.com/vaishnavisk09/bloom-todo" ...>Source Code</a>

<!-- Book REST API -->
<a href="https://github.com/vaishnavisk09/book-rest-api" ...>Source Code</a>

<!-- Travel Explorer -->
<a href="https://github.com/vaishnavisk09/travel-explorer" ...>Source Code</a>
```

---

## 🔄 Update the Website After Deployment

After making changes locally, push again to automatically update the live site:

```bash
# 1. Stage your changes
git add .

# 2. Commit with a descriptive message
git commit -m "Update: Describe what you changed"

# 3. Push to GitHub
git push
```

GitHub Pages will automatically rebuild and update your live site within 1–2 minutes.

---

## ✅ Quality Checks Performed

| Check | Status |
|---|---|
| All 5 navigation links work | ✅ |
| Mobile hamburger menu opens/closes | ✅ |
| Outside click closes the mobile menu | ✅ |
| Escape key closes the mobile menu | ✅ |
| Active nav link highlighted on scroll | ✅ |
| Smooth scrolling to all sections | ✅ |
| Layouts checked at 375px, 480px, 768px, 1024px | ✅ |
| No horizontal overflow | ✅ |
| Hero avatar uses initials (no broken images) | ✅ |
| Favicon uses inline SVG (no broken image) | ✅ |
| Email button uses mailto: (works offline) | ✅ |
| GitHub links open in new tab with rel="noopener" | ✅ |
| Project links point to GitHub profile (not 404) | ✅ |
| Project link placeholders documented with comments | ✅ |
| Scroll reveal animations via IntersectionObserver | ✅ |
| prefers-reduced-motion respected | ✅ |
| Focus-visible states for keyboard nav | ✅ |
| ARIA labels on all interactive elements | ✅ |
| Copyright year auto-updates via JavaScript | ✅ |
| No external image URLs that could break | ✅ |
| No backend APIs or private keys | ✅ |
| No build tools or dependencies required | ✅ |
| Google Fonts loaded via CSS @import | ✅ |
| Works when opened as local file (file://) | ✅ |
| Ready for GitHub Pages static hosting | ✅ |

---

## ⚠️ Known Placeholders

| Item | Current State | How to Fix |
|---|---|---|
| Project repo links | Point to GitHub profile root | Replace `href` in each project card with the actual repo URL |
| Live demo links | Not shown (no deployed demos yet) | Add `Live Demo` buttons once projects are deployed |
| `og:url` meta tag | Set to `https://vaishnavisk09.github.io/` | Update to your actual GitHub Pages URL after deployment |

---

## 👩‍💻 Author

**Vaishnavi Kadam**  
Computer Engineering Student · SAKEC, Mumbai  
📧 vaishnavi.kadam24@sakec.ac.in  
🐙 [github.com/vaishnavisk09](https://github.com/vaishnavisk09)

---

*Built with ❤️ using HTML5, CSS3 & Vanilla JavaScript — no frameworks, no dependencies.*
