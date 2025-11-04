# Components

This directory contains all reusable components for the landing page, organized by their function.

## Structure

```
components/
├── layout/           # Layout components (Header, Footer, etc.)
│   └── Header/      # Navigation header with branding and CTA
│       ├── Header.tsx
│       ├── Header.module.css
│       └── index.ts
│
└── sections/        # Page sections (Hero, Features, etc.)
    └── Hero/        # Hero section with headline and CTA
        ├── Hero.tsx
        ├── Hero.module.css
        └── index.ts
```

## Component Guidelines

### Folder Structure
Each component follows this pattern:
- `ComponentName.tsx` - Main component file
- `ComponentName.module.css` - Scoped styles
- `index.ts` - Barrel export for clean imports

### Import Convention
```tsx
// Use clean imports via barrel files
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
```

### Styling
- CSS Modules for component-scoped styles
- Global CSS variables defined in `app/globals.css`
- Responsive design with mobile-first approach
- Semantic HTML for accessibility

## Available Components

### Layout Components

#### Header
Sticky navigation header with:
- Brand logo and name
- Primary navigation links
- Call-to-action button
- Responsive layout with mobile support

### Section Components

#### Hero
Landing hero section with:
- Client retention badge
- Main headline with brand highlight
- Descriptive copy
- Capability pills
- Primary CTA button
