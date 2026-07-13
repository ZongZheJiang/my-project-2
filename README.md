# Zongzhe Jiang — Personal Portfolio

Personal portfolio website built with Next.js, Tailwind CSS v4, and Shadcn UI.

[![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)

Live: [my-project-2-neon.vercel.app](https://my-project-2-neon.vercel.app/)

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Styling | Tailwind CSS v4 |
| Component Library | Shadcn UI (Radix UI + CVA) |
| Language | TypeScript |
| Deployment | Cloudflare Workers via OpenNext |

---

## Getting Started

**Prerequisites:** Node.js 18+

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/                      # Next.js App Router — pages and global config
│   ├── layout.tsx            # Root layout: fonts, ThemeProvider, metadata
│   ├── globals.css           # Tailwind imports, Shadcn CSS variables, dark mode variant
│   ├── page.tsx              # / — Home (Hero)
│   ├── projects/page.tsx     # /projects — filterable project card grid
│   └── about/page.tsx        # /about — profile banner + work experience timeline
│
├── components/               # Shadcn UI pulls — unmodified library components only
│   ├── ui/
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── separator.tsx
│   │   └── ...
│   ├── theme-provider.tsx    # React context — toggles .dark on <html>, persists to localStorage
│   └── theme-switcher.tsx    # Sun/Moon icon button wired to ThemeProvider
│
├── sections/                 # Composed page sections built on top of Shadcn components
│   ├── navbar.tsx            # Site-wide nav bar with scroll-aware background + theme toggle
│   ├── hero.tsx              # Full-screen hero with background image and resume CTA
│   ├── intro-banner.tsx      # Profile card: photo, bio, skill badges, social links
│   ├── experience-list.tsx   # Vertical timeline of work experiences
│   └── projectCardGrid.tsx   # Filterable project card grid with type badges
│
├── data/                     # Static content arrays — no JSX, no page imports
│   ├── experience.tsx        # EXPERIENCE_LIST
│   └── projectCard.tsx       # PROJECT_CARD_LIST
│
├── types/                    # Shared TypeScript interfaces
│   ├── experience.ts         # Experience
│   └── projectCard.ts        # ProjectCard
│
└── lib/
    └── utils.ts              # cn() — clsx + tailwind-merge

public/                       # Static media, served at the root path
├── self-portrait.jpeg
├── hacx-pic.jpg
├── thrive-pic2.jpeg
├── icebreaker-pic.png
└── JiangZongZhe_Resume_Berkeley_SWE.pdf
```

---

## Conventions

### `components/ui/`
Raw Shadcn pulls. Treat as a local copy of the upstream library — do not modify. Any customisation belongs in `sections/` instead.

### `sections/`
Page-level building blocks. Each file composes from `components/ui/`, holds its own state where needed, and is imported directly by a page. This is where filter logic, scroll effects, and layout decisions live.

### `data/`
Plain TypeScript arrays that feed sections. No JSX, no imports from `sections/` or `app/`. Pages import from `sections/`; sections import from `data/` — not the other way around.

### `types/`
Shared interfaces consumed by both `data/` files and `sections/`. No logic.

### `public/`
All media assets. Referenced as root-relative paths in code, e.g. `"/self-portrait.jpeg"`.

---

## Dark Mode

`ThemeProvider` toggles a `.dark` class on `<html>` and persists the choice in `localStorage`. `globals.css` configures Tailwind's `dark:` variant to respond to that class rather than the OS preference:

```css
@variant dark (&:where(.dark, .dark *));
```

CSS variables for both themes are declared in `:root` (light) and `.dark` (dark) blocks in `globals.css`.
