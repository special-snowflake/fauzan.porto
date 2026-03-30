# Ahmad Fauzan - Personal Portfolio

A modern, fully template-driven portfolio website built with **Next.js**, **React**, and **Tailwind CSS**. The entire portfolio is powered by a single `data.json` file — fork it, edit the data, and deploy your own version without touching any code!

## 🎯 What is This?

This is a production-ready portfolio template that demonstrates best practices for building reusable, data-driven applications. It features:

- ⚡ **Next.js 15+** with latest React 19
- 🎨 **Tailwind CSS** for responsive, modern design
- 📱 **Fully responsive** on mobile, tablet, and desktop
- 🚀 **Optimized for performance** (image optimization, code splitting)
- 🎭 **Smooth animations** and interactive elements
- 📊 **SEO-friendly** metadata support
- 📝 **Zero-config customization** — edit only `data.json`

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** (check with `node --version`)
- **npm** or **yarn** (check with `npm --version`)

### Setup Locally

1. **Fork this repository** on GitHub (or clone it)
   ```bash
   git clone https://github.com/special-snowflake/fauzan.porto.git
   cd fauzan.porto
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

4. **Edit `public/assets/data.json`** to customize your portfolio (see section below)

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📝 Customization Guide

Everything in this portfolio is controlled by **`public/assets/data.json`**. Edit this single file to customize:

### 1. **Site Metadata** (`metadata`)
Controls SEO, page titles, and language settings.

```json
{
  "metadata": {
    "title": "Your Name | Your Title",
    "description": "A short description of your portfolio",
    "language": "en",
    "author": "Your Name",
    "keywords": "portfolio, developer, web, design"
  }
}
```

**Fields:**
- `title` - Browser tab title and main SEO title
- `description` - Meta description (shown in search results)
- `language` - HTML language attribute (e.g., "en", "id", "fr")
- `author` - Portfolio author name
- `keywords` - Comma-separated keywords for SEO

### 2. **Header Navigation** (`header`)
Customize the logo and navigation menu.

```json
{
  "header": {
    "logo": "AF",
    "navigation": [
      {"href": "/", "label": "Home"},
      {"href": "/projects", "label": "Projects"},
      {"href": "/contacts", "label": "Contacts"}
    ]
  }
}
```

**Fields:**
- `logo` - Text displayed in the top-left corner (e.g., initials)
- `navigation` - Array of navigation links (path and display text)

### 3. **Home/Dashboard Section** (`dashboard`)
The main hero section with your introduction.

```json
{
  "dashboard": {
    "backgroundLeft": "/assets/images/bg-pattern-white.webp",
    "imageLeft": "/assets/images/main.jpeg",
    "welcomeBadge": "👋 Welcome to my portfolio",
    "name": "Ahmad Fauzan",
    "headline": "I'm Ahmad Fauzan",
    "desc": "Welcome to my portfolio.",
    "extendedBio": "Full-stack developer passionate about...",
    "stats": [
      {"value": "4+", "label": "Projects"},
      {"value": "5+", "label": "Years Exp"},
      {"value": "∞", "label": "Coffee"}
    ],
    "cta": [
      {"href": "/projects", "label": "View My Projects", "variant": "primary"},
      {"href": "/contacts", "label": "Get In Touch", "variant": "secondary"}
    ]
  }
}
```

**Fields:**
- `backgroundLeft` - Path to background pattern image
- `imageLeft` - Path to your profile/hero image
- `welcomeBadge` - Small badge text at the top (with emoji)
- `name` - Your full name
- `headline` - Main headline (typically "I'm [name]")
- `desc` - Short description (one-liner)
- `extendedBio` - Longer bio/description
- `stats` - Array of statistics to display (value + label)
- `cta` - Call-to-action buttons (href, label, variant: "primary" or "secondary")

### 4. **Projects Section** (`projects`)
Display your portfolio projects.

```json
{
  "projects": {
    "eyebrow": "MY_WORK.exe",
    "heading": "Featured Projects",
    "desc": "A selection of projects I've worked on...",
    "projectCountText": "projects loaded",
    "cta": {
      "heading": "Interested in working together?",
      "description": "I'm always open to discussing new projects...",
      "buttonLabel": "Get in Touch",
      "buttonHref": "/contacts"
    },
    "list": [
      {
        "id": 0,
        "imagePath": "/assets/images/projects/project.webp",
        "projectName": "Project Name",
        "desc": "Project description...",
        "link": {"url": "https://example.com", "label": "View Project"},
        "tag": ["react", "nodejs"]
      }
    ]
  }
}
```

**Main Fields:**
- `eyebrow` - Small text above the main heading
- `heading` - Main section heading
- `desc` - Section description
- `projectCountText` - Text after project count (e.g., "projects loaded")
- `cta` - Call-to-action section after projects

**Project Item Fields:**
- `id` - Unique identifier (number)
- `imagePath` - Path to project image
- `projectName` - Project title
- `desc` - Project description
- `link` - Object with `url` and `label`
- `tag` - Array of technology tags

### 5. **Contacts Page** (`contactsPage`)
Configure the contacts page content.

```json
{
  "contactsPage": {
    "badge": "💬 Let's Connect",
    "heading": "Get in Touch",
    "description": "I'm always open to new opportunities...",
    "emailHeading": "Prefer Email?",
    "emailDescription": "Send me a message directly...",
    "emailButtonLabel": "Send Email"
  }
}
```

**Fields:**
- `badge` - Badge text at top of page
- `heading` - Main page heading
- `description` - Page description
- `emailHeading` - Heading for email section
- `emailDescription` - Email section description
- `emailButtonLabel` - Email button text

### 6. **Contact Links & Social Media** (`contacts`)
Your contact information and social media links.

```json
{
  "contacts": [
    {
      "label": "LinkedIn",
      "url": "https://www.linkedin.com/in/your-profile",
      "type": "linkedin"
    },
    {
      "label": "GitHub",
      "url": "https://github.com/your-username",
      "type": "github"
    },
    {
      "label": "Email",
      "url": "mailto:your.email@example.com",
      "type": "email"
    }
  ]
}
```

**Supported Social Types:**
LinkedIn, GitHub, Email, Discord, Dribbble, Facebook, Instagram, Line, Medium, Pinterest, Reddit, Telegram, Twitter, WhatsApp

**Fields:**
- `label` - Display name
- `url` - Full URL (including `mailto:` for email)
- `type` - Icon type (must match an SVG in `public/assets/icons/`)

### 7. **Footer** (`footer`)
Configure footer content.

```json
{
  "footer": {
    "aboutHeading": "About",
    "aboutDescription": "Full-stack developer creating...",
    "linksHeading": "Quick Links",
    "quickLinks": [
      {"href": "/", "label": "Home"},
      {"href": "/projects", "label": "Projects"},
      {"href": "/contacts", "label": "Contact"}
    ],
    "sourceCodeHeading": "Source Code",
    "sourceCodeLabel": "View on GitHub",
    "sourceCodeUrl": "https://github.com/your-repo",
    "copyrightText": "Created by Your Name. All rights reserved."
  }
}
```

**Fields:**
- `aboutHeading` / `aboutDescription` - About section
- `linksHeading` / `quickLinks` - Quick links section
- `sourceCodeHeading` / `sourceCodeLabel` / `sourceCodeUrl` - Source code section
- `copyrightText` - Copyright notice (year is auto-added)

## 🖼️ Adding Images

Place your images in `public/assets/images/`:

```
public/assets/images/
├── main.jpeg              # Your profile photo
├── bg-pattern-white.webp   # Background pattern
├── projects/
│   ├── project-1.webp
│   ├── project-2.webp
│   └── ...
└── ...
```

Then reference them in `data.json` with paths like `/assets/images/main.jpeg`.

## 🚀 Deploy

### Deploy to Vercel (Recommended)

The easiest way to deploy. Vercel is optimized for Next.js.

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **That's it!** Your portfolio is live at `your-project.vercel.app`

**Auto-deployment:** Every time you push to GitHub, Vercel automatically rebuilds and deploys.

### Deploy to Netlify

1. **Connect your GitHub repo** at [netlify.com](https://netlify.com)
2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Click "Deploy"**

### Deploy to Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Deploy to Self-Hosted Server

```bash
# Build
npm run build

# Start production server
npm start
```

Server will run on `http://localhost:3000`

## 📦 Project Structure

```
fauzan.porto/
├── public/
│   └── assets/
│       ├── data.json              # ← EDIT HERE to customize
│       ├── images/
│       │   ├── main.jpeg
│       │   ├── bg-pattern-white.webp
│       │   └── projects/
│       └── icons/
│           ├── github.svg
│           ├── linkedin.svg
│           └── ...
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout
│   │   ├── page.js                # Home page
│   │   └── globals.css            # Global styles
│   ├── components/
│   │   ├── Header.js              # Navigation header
│   │   ├── Footer.js              # Page footer
│   │   ├── ProjectCard.js         # Project card component
│   │   └── Icons.js               # Icon renderer
│   ├── pages/
│   │   ├── projects.js            # Projects page
│   │   └── contacts.js            # Contacts page
│   └── helpers/
│       └── mapper.js              # Data mapping utility
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Code quality
npm run lint         # Run ESLint
```

## 🎨 Customizing Styles

The project uses **Tailwind CSS**. Global styles are in `src/app/globals.css`.

### Theme Colors

Tailwind classes use these CSS variables (defined in `globals.css`):
- `--color-primary` - Primary accent color (purple)
- `--color-accent` - Secondary accent color (blue)
- `--color-bg` - Background color

Edit `src/app/globals.css` to change the color scheme:

```css
:root {
  --color-primary: #7c65d8;  /* Change primary color */
  --color-accent: #407bff;   /* Change accent color */
  --color-bg: #0f172a;       /* Change background */
}
```

## ✨ Features Breakdown

| Feature | Details |
|---------|---------|
| **Data-Driven** | Single `data.json` file controls everything |
| **Responsive** | Mobile-first design, perfect on all devices |
| **Fast** | Optimized images, code splitting, lazy loading |
| **SEO** | Metadata, open graph support, structured data |
| **Animations** | Smooth scroll, fade, and slide animations |
| **Dark Mode** | Built-in dark theme |
| **Accessible** | WCAG compliant, semantic HTML |
| **Mobile Menu** | Auto hamburger menu on small screens |
| **Smooth Scroll** | Parallax effects and scroll animations |

## 🤝 Contributing

Have improvements? Fork the repo and submit a PR!

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙋 Support

- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- 💬 Questions? Create an issue on GitHub

---

**Made with ❤️ by Ahmad Fauzan**

[Live Demo](https://fauzan.dev) | [GitHub](https://github.com/special-snowflake/fauzan.porto) | [LinkedIn](https://www.linkedin.com/in/ah-fauzan)
