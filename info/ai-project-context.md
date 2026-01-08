# AI Project Context - Blayden Portfolio Template

**Version:** 0.1.0 (Initial State)
**Date:** 2026-01-08
**Last Updated By:** Claude (Initial Analysis)
**Status:** Development / Customization Phase

---

## 📋 Quick Overview

**Project Type:** Portfolio Website Template
**Framework:** Next.js 15.5.2 (App Router)
**Language:** TypeScript 5.x
**Styling:** Global CSS (not Tailwind/CSS Modules)
**State Management:** React Context API
**Animations:** GSAP 3.13.0 + Lenis smooth scroll

**Purpose:** Multi-variant portfolio template for designers/developers with 3 home page options and rich animations.

---

## 🗂️ Project Structure Map

```
blayden/
├── 📱 app/                          # Next.js App Router (Pages & Routing)
│   ├── (homes)/                     # Route Group (URL-neutral grouping)
│   │   ├── home-1/page.tsx         # Portfolio variant 1 (clean, masonry grid)
│   │   ├── home-2/page.tsx         # Portfolio variant 2 (alternative layout)
│   │   └── home-3/page.tsx         # Portfolio variant 3 (with Typed.js effect)
│   ├── preview/page.tsx            # Demo page (DELETE before production)
│   ├── layout.tsx                  # ⭐ ROOT LAYOUT - wraps entire app
│   └── page.tsx                    # Main entry point (renders PreviewPage)
│
├── 🧩 components/                   # React Components (ALL Client Components)
│   ├── animation/                   # Reusable animation wrappers
│   │   ├── HoverCursorEffect.tsx   # Magnetic cursor follower
│   │   ├── MasonryGrid.tsx         # Isotope.js masonry layout
│   │   ├── Parallax.tsx            # GSAP parallax scroll effect
│   │   ├── RevealText.tsx          # Character-by-character text reveal
│   │   ├── StackCards.tsx          # Card stacking scroll animation
│   │   └── VelocityMarquee.tsx     # Infinite marquee with scroll speed
│   ├── headers/
│   │   ├── Header1.tsx             # Sticky nav with IntersectionObserver
│   │   ├── Logo.tsx                # Brand logo component
│   │   └── ColorSwitcher.tsx       # Light/Dark theme toggle
│   ├── homes/                       # Sections for each home variant
│   │   ├── home-1/
│   │   │   ├── Hero.tsx            # Landing section with parallax
│   │   │   ├── Portfolios.tsx      # Gallery with lightbox (data from JSON)
│   │   │   ├── About.tsx           # About me section
│   │   │   ├── Services.tsx        # Services with StackCards animation
│   │   │   ├── Resume.tsx          # Education & experience (data from JSON)
│   │   │   ├── Contact.tsx         # Form (React Hook Form + Zod + Formspree)
│   │   │   ├── Testimonials.tsx    # Client reviews (data from JSON)
│   │   │   ├── Socials.tsx         # Social media links (data from JSON)
│   │   │   └── BottomBackground.tsx # Decorative footer bg
│   │   ├── home-2/                 # Similar structure, different designs
│   │   └── home-3/                 # Similar structure, different designs
│   ├── modals/
│   │   └── PortfolioPopup.tsx      # Full-screen portfolio detail modal
│   ├── preview/                     # Demo page components (DELETE before production)
│   └── scroll/
│       ├── InitScroll.tsx          # GSAP scroll animations initializer
│       ├── LenisSmoothScroll.tsx   # Smooth scroll provider
│       └── ScrollTop.tsx           # Scroll-to-top button
│
├── 🌐 contexts/                     # React Context (Global State)
│   └── PortfolioContext.tsx        # Portfolio modal state management
│
├── 📊 data/                         # ⭐ JSON Content Files (MAIN CUSTOMIZATION AREA)
│   ├── portfolios.json             # Portfolio works for all home variants
│   ├── resume.json                 # Education, experience, tools
│   ├── services.json               # Service offerings
│   ├── socials.json                # Social media links
│   └── testimonials.json           # Client testimonials
│
├── 🔧 lib/                          # Utilities & Helpers
│   └── schemas/
│       └── contact.ts              # Zod validation schema for contact form
│
└── 📁 public/                       # Static Assets
    ├── css/
    │   ├── main.css                # Main styles (CSS variables for theming)
    │   ├── plugins.css             # Library styles (Swiper, Lightbox)
    │   ├── styles.css              # Entry point (imports all CSS)
    │   └── main-demo.css           # Demo page styles (DELETE before production)
    ├── fonts/
    │   ├── Fontawesome/            # Font Awesome icons
    │   └── Phosphor/               # ⭐ Phosphor Icons (USED in project)
    ├── img/
    │   ├── avatars/                # Testimonial author photos (400x400 WebP)
    │   ├── backgrounds/            # Hero section backgrounds (parallax)
    │   ├── demo/                   # Demo page images (DELETE before production)
    │   ├── favicon/                # Site icons (browser, iOS, Android)
    │   ├── icons/                  # Tool icons (Photoshop, Figma, etc. SVG)
    │   ├── marquee/                # Images for VelocityMarquee component
    │   ├── services/               # Service section images
    │   ├── testimonials/           # Testimonial backgrounds (1400x1200)
    │   └── works/                  # ⭐ Portfolio work images
    │       └── work-single/        # Detailed project images for modal
    ├── video/
    │   └── video-1.mp4             # Video files
    └── resume-sample.pdf           # Downloadable CV/resume
```

---

## 🔑 Key Technical Patterns

### 1. Server vs Client Components

**Server Components (default):**
- All pages in `app/` folder
- No useState, useEffect, browser APIs
- Example: `app/(homes)/home-1/page.tsx`

**Client Components (with "use client"):**
- All components in `components/` folder
- Use React hooks, event handlers, animations
- Example: All animation components, headers, sections

### 2. Data-Driven Architecture

**Separation of Concerns:**
```
DATA (what)              PRESENTATION (how)
├── portfolios.json  →   components/homes/home-1/Portfolios.tsx
├── services.json    →   components/homes/home-1/Services.tsx
├── resume.json      →   components/homes/home-1/Resume.tsx
├── socials.json     →   components/homes/home-1/Socials.tsx
└── testimonials.json →  components/homes/home-1/Testimonials.tsx
```

**Benefits:**
- Change content without touching code
- Easy to add multi-language support
- Non-developers can edit JSON files

### 3. Animation System (GSAP)

**Core Pattern:**
```tsx
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // Animations here
    gsap.to(element, { ... });
  }, containerRef);

  return () => ctx.revert(); // ⚠️ CLEANUP CRITICAL
}, []);
```

**Key Components:**
- `InitScroll.tsx` - Centralizes scroll-triggered animations via data attributes
- `Parallax.tsx` - GSAP ScrollTrigger for parallax effects
- `RevealText.tsx` - SplitType + GSAP for character animations
- `StackCards.tsx` - Card stacking scroll effect
- `VelocityMarquee.tsx` - Speed-reactive infinite scroll

**Data Attributes for Animations:**
```html
<div class="animate-in-up" data-delay="300" data-duration="1">
  <!-- Auto-animated by InitScroll -->
</div>
```

### 4. Global State (Context API)

**PortfolioContext:**
- **Purpose:** Manage portfolio modal open/close state
- **Usage:**
  - Gallery: `setSelectedPortfolio(item)` → opens modal
  - Modal: `setSelectedPortfolio(null)` → closes modal
- **Side Effect:** Adds/removes `popup-active` class on `<html>` to prevent scroll

### 5. Form Handling

**Stack:** React Hook Form + Zod + Formspree

```tsx
// Schema (lib/schemas/contact.ts)
export const contactSchema = z.object({
  Name: z.string().min(2),
  "E-mail": z.string().email(),
  Message: z.string().min(5),
  // ...
});

// Component (components/homes/home-1/Contact.tsx)
const { register, handleSubmit } = useForm({
  resolver: zodResolver(contactSchema)
});
const [formState, submit] = useForm("FORMSPREE_ID");
```

### 6. Image Optimization

**Next.js Image Component:**
```tsx
<Image
  src="/img/works/project.webp"
  width={1920}
  height={1080}
  alt="Project description"
  loading="lazy"
/>
```

**Benefits:**
- Auto WebP/AVIF conversion
- Responsive srcset generation
- Lazy loading
- Layout shift prevention

### 7. Theming (CSS Variables)

**Light/Dark Theme:**
```css
:root {
  --color-primary: #3498db;
  --color-bg: #ffffff;
}

[color-scheme="dark"] {
  --color-bg: #1a1a1a;
}
```

**Controlled by:** `components/headers/ColorSwitcher.tsx`
**Persisted in:** localStorage

---

## 📦 Dependencies & Libraries

### Core Framework
- **next:** 15.5.2 (App Router, Server Components, Image optimization)
- **react:** 19.1.0 (Latest stable)
- **typescript:** 5.x

### Animations
- **gsap:** 3.13.0 (Animation engine, ScrollTrigger plugin)
- **lenis:** 1.3.11 (Smooth scroll library)
- **split-type:** 0.3.4 (Text splitting for animations)
- **isotope-layout:** 3.0.6 (Masonry grid)
- **swiper:** 11.2.10 (Touch slider)
- **typed.js:** 2.1.0 (Typing animation - home-3)

### Forms & Validation
- **react-hook-form:** 7.62.0 (Form state management)
- **zod:** 4.1.5 (Schema validation)
- **@hookform/resolvers:** 5.2.1 (Zod integration)
- **@formspree/react:** 3.0.0 (Form backend)

### UI Components
- **yet-another-react-lightbox:** 3.25.0 (Image lightbox with plugins)
- **react-toastify:** 11.0.5 (Toast notifications)

### Dev Tools
- **eslint:** 9.x (Code linting)
- **eslint-config-next:** 15.5.2 (Next.js ESLint rules)

---

## 🎯 Common Tasks & File Locations

### Adding Portfolio Work
1. **Prepare image:** Convert to WebP, place in `public/img/works/`
2. **Edit data:** `data/portfolios.json` → Find `"home1"` array → Add object:
   ```json
   {
     "id": 99,
     "href": "/img/works/new-project.webp",
     "src": "/img/works/new-project.webp",
     "width": 1920,
     "height": 1080,
     "title": "New Project",
     "category": "Web Design",
     "description": "Project description..."
   }
   ```
3. **Component:** `components/homes/home-1/Portfolios.tsx` (no changes needed)

### Changing SEO Meta
- **File:** `app/layout.tsx`
- **Lines:** 16-19 (metadata export)

### Changing Site Colors
- **File:** `public/css/main.css`
- **Look for:** `:root { --color-*: ... }`

### Adding New Service
- **File:** `data/services.json`
- **Prepare images:** `public/img/services/`

### Updating Resume
- **File:** `data/resume.json`
- **Sections:** education, experience, tools

### Configuring Contact Form
- **File:** `components/homes/home-1/Contact.tsx`
- **Find:** `useForm("FORMSPREE_ID")` → Replace with your Formspree ID

### Changing Navigation Menu
- **File:** `components/headers/Header1.tsx`
- **Pass prop:** `menuItems={[...]}`

### Replacing Logo
- **File:** `components/headers/Logo.tsx`
- **Edit component:** Replace with Image or text

---

## 🚨 Critical Information

### Files to DELETE Before Production
- `app/preview/` folder
- `components/preview/` folder
- `public/css/main-demo.css`
- `public/img/demo/` folder

### "use client" Directive Required For
- useState, useEffect, useRef hooks
- Event handlers (onClick, onChange)
- Browser APIs (localStorage, window, IntersectionObserver)
- GSAP animations (needs DOM access)
- Any library that uses hooks

### Path Aliases
- `@/` = project root
- Example: `import Header from "@/components/headers/Header1"`

### Important Conventions
- **Component files:** PascalCase (Header1.tsx)
- **Data files:** lowercase (portfolios.json)
- **Image naming:** `{width}x{height}_{id}.webp` (e.g., 1400x1050_w01.webp)
- **Icon classes:** Phosphor Icons - `ph ph-icon-name` or `ph-thin ph-icon-name`

### Routing (App Router)
- `app/page.tsx` → `/`
- `app/(homes)/home-1/page.tsx` → `/home-1` (parens don't create URL segment)
- `app/preview/page.tsx` → `/preview`

---

## 🔄 Data Flow Examples

### Portfolio Gallery Flow
```
1. User clicks portfolio item
   ↓
2. Portfolios.tsx: setSelectedPortfolio(item)
   ↓
3. PortfolioContext updates state
   ↓
4. PortfolioPopup.tsx re-renders with data
   ↓
5. Modal displays, scroll locked (popup-active class)
```

### Contact Form Flow
```
1. User fills form
   ↓
2. React Hook Form validates via Zod schema
   ↓
3. If valid → Formspree API submission
   ↓
4. Toast notification (success/error)
   ↓
5. Form reset
```

### Scroll Animation Flow
```
1. Page loads → InitScroll.tsx runs
   ↓
2. Finds all .animate-in-up elements
   ↓
3. Creates GSAP ScrollTrigger for each
   ↓
4. User scrolls → Elements animate in
   ↓
5. On unmount → ctx.revert() cleanup
```

---

## 🎨 Customization Checklist

### Phase 1: Content
- [ ] Update `data/portfolios.json` with your works
- [ ] Update `data/resume.json` with your experience
- [ ] Update `data/services.json` with your services
- [ ] Update `data/socials.json` with your social links
- [ ] Update `data/testimonials.json` with client reviews

### Phase 2: Assets
- [ ] Replace images in `public/img/works/`
- [ ] Replace hero backgrounds in `public/img/backgrounds/`
- [ ] Replace favicon in `public/img/favicon/`
- [ ] Replace resume PDF in `public/`

### Phase 3: Configuration
- [ ] Update metadata in `app/layout.tsx` (title, description)
- [ ] Change site language from "en" to your locale
- [ ] Configure Formspree ID in Contact.tsx
- [ ] Update logo in `components/headers/Logo.tsx`
- [ ] Customize colors in `public/css/main.css`

### Phase 4: Cleanup
- [ ] Delete `app/preview/` folder
- [ ] Delete `components/preview/` folder
- [ ] Delete demo CSS and images
- [ ] Remove unused home variants (keep only one)

### Phase 5: Deploy
- [ ] Run `npm run build` to check for errors
- [ ] Test on mobile devices
- [ ] Deploy to Vercel or your hosting

---

## 💡 Performance Notes

### Current Optimizations
- Next.js automatic code splitting by route
- Image optimization via Next.js Image component
- WebP image format throughout
- Lazy loading for images
- Dynamic imports for heavy libraries (Isotope)
- CSS Custom Properties for theming
- Server Components where possible

### Known Performance Considerations
- GSAP ScrollTrigger may impact on low-end devices
- Lenis smooth scroll adds overhead
- Multiple parallax elements can be GPU-intensive
- Masonry grid calculation on resize

---

## 🐛 Known Issues & Quirks

1. **ESLint suppressions:** Some `eslint-disable` comments present
2. **Page component naming:** Should be PascalCase `Page` not lowercase `page`
3. **Any types:** Used in some places (e.g., HoverCursorEffect ref)
4. **No error boundaries:** Minimal error handling
5. **README not customized:** Still default create-next-app content

---

## 📝 Future Enhancement Ideas

- [ ] Add video support for portfolio items (discussed 2026-01-08)
- [ ] Migrate to CDN for media assets
- [ ] Add i18n (internationalization) support
- [ ] Implement CMS integration
- [ ] Add blog functionality
- [ ] Create custom error pages
- [ ] Add loading states
- [ ] Implement PWA features
- [ ] Add more accessibility features (ARIA labels, focus management)

---

## 🔗 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [GSAP ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Formspree](https://formspree.io/)
- [Squoosh (Image Optimization)](https://squoosh.app/)

---

## 📞 Project Context Notes

**When to update this file:**
- Major architectural changes
- New dependencies added
- New features implemented
- File structure reorganization
- Version milestones

**Version History:**
- 0.1.0 (2026-01-08): Initial context capture, pre-customization state

---

**END OF AI CONTEXT FILE**
*This file is designed to be read by AI assistants to quickly understand the project structure and conventions without exploring the entire codebase.*
