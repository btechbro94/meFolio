# Aaqib Rashid Mir — Portfolio Website

> **Data Science. Artificial Intelligence. Real-World Impact.**

A premium, modern portfolio website for **Aaqib Rashid Mir** — Data Science & AI Trainer, AI/ML Researcher, and Technology Educator.

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple)

## 🚀 Features

- **Premium Dark Theme** — Sophisticated dark mode with electric blue/cyan accents
- **Responsive Design** — Optimized for all screen sizes from mobile to 4K
- **Smooth Animations** — Framer Motion powered scroll reveals and interactions
- **Neural Network Visualization** — Custom SVG-based AI-themed hero animation
- **SEO Optimized** — Complete metadata, structured data, Open Graph, sitemap
- **Accessible** — WCAG compliant with keyboard navigation and reduced motion support
- **CMS-Ready Architecture** — Content separated from UI for easy updates
- **Performance Optimized** — Fast loading with code splitting and lazy loading

## 📁 Project Structure

```
├── public/
│   ├── robots.txt          # Search engine directives
│   └── sitemap.xml         # XML sitemap
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation with mobile menu
│   │   ├── Hero.tsx        # Hero section with neural network
│   │   └── Sections.tsx    # All page sections
│   ├── data/
│   │   └── profile.ts      # All content data (edit here!)
│   ├── App.tsx             # Main application
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles & Tailwind config
├── index.html              # HTML with SEO metadata
├── package.json
├── tsconfig.json
└── vite.config.js
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

Visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Type Check

```bash
npm run typecheck
```

## 📝 Content Management

All personal information is stored in **`src/data/profile.ts`**. Edit this file to update:

- Personal details (name, headline, bio)
- Education and experience
- Skills and expertise
- Projects
- Courses
- Research areas
- Services
- Social links
- Contact information

**No component changes needed** — just update the data file.

## 📋 Content to Replace with Real Information

The following items are marked as **PLACEHOLDER** and need to be replaced:

### Required Updates

| Item | Location | Status |
|------|----------|--------|
| Professional Photo | About section | Replace placeholder |
| Institution Names | Education & Experience | Replace placeholders |
| Employment Dates | Experience section | Replace placeholders |
| Actual Projects | Projects section | Replace placeholder projects |
| Certifications | Certifications section | Add verified certifications |
| Social Links | Contact & Footer | Add actual URLs |
| Email Address | Contact section | Add actual email |
| Research Publications | Research section | Add when available |
| Blog Posts | Blog section | Add actual articles |
| Testimonials | Testimonials section | Add real testimonials |

### How to Add Content

1. **Projects**: Edit `projects` array in `profile.ts`
2. **Courses**: Edit `courses` array in `profile.ts`
3. **Certifications**: Uncomment and fill the `certifications` array
4. **Social Links**: Fill in URLs in `socialLinks` object
5. **Blog Posts**: Add to blog section in `Sections.tsx` or create a separate data file

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy — zero configuration needed

### Other Platforms

```bash
npm run build
# Deploy the contents of the `dist/` folder
```

### Environment Variables

No environment variables required for the base portfolio. If adding:
- Contact form backend → Add API endpoint
- Analytics → Add tracking ID
- CMS integration → Add CMS credentials

## 🔍 SEO

The site includes:
- ✅ Meta title and description
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (Person schema)
- ✅ Canonical URL
- ✅ XML Sitemap
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Proper heading hierarchy

Update the canonical URL and social URLs in `index.html` with your actual domain.

## 🎨 Design System

### Colors
- **Primary**: `#6366f1` (Indigo)
- **Accent**: `#06b6d4` (Cyan)
- **Background**: `#0a0a0f` (Deep Black)
- **Surface**: `#111118` (Dark Card)
- **Text**: `#f8fafc` / `#94a3b8` / `#64748b`

### Typography
- **Primary**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono

### Animations
- Scroll reveal (Framer Motion)
- Neural network SVG animation
- Card hover effects
- Smooth section transitions
- Respects `prefers-reduced-motion`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Color contrast compliance
- Reduced motion support
- Alt text for images

## 📄 License

© 2026 Aaqib Rashid Mir. All rights reserved.

## 🔗 Links

- **Portfolio**: [aaqibrashidmir.com](https://aaqibrashidmir.com)
- **The Coding Science**: [thecodingscience.com](https://thecodingscience.com)

---

Built with ❤️ using React, TypeScript, Tailwind CSS and Framer Motion.
