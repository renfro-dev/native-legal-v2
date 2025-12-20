# Design Guidelines: Family Law Tech Consulting Website

## Design Approach
**Refined Futuristic Minimalism** - High-end luxury tech aesthetic for legal professionals. Dark, sophisticated interface with warm metallic accents. Generous whitespace, balanced editorial layouts, and subtle micro-animations create premium, trustworthy presence.

## Color Palette
- **Background**: Deep charcoal (#0a0a0a)
- **Surface/Cards**: Elevated dark (#141414)
- **Borders**: Warm charcoal (#2a2520), hover (#3a3530)
- **Body Text**: Warm gray (#a39e99)
- **Headings**: Soft white (#f5f5f5)
- **Primary Accent**: Warm amber (#f59e0b)
- **Secondary Accents**: Copper (#d97706), Warm gold (#eab308)
- **Muted Accent**: Bronze (#92400e) for subtle elements

## Typography
- **Font Family**: Inter (Google Fonts)
- **Display (H1)**: Bold 700, tracking-tight, 4xl-6xl, soft white
- **Section Headers (H2)**: Semibold 600, tracking-tight, 3xl-4xl, soft white
- **Subheads (H3)**: Medium 500, tracking-tight, xl-2xl, warm gray
- **Body**: Regular 400, relaxed line-height, warm gray
- **Labels/Categories**: Uppercase, tracking-widest, text-xs, amber accent

## Layout System
- **Spacing**: Tailwind units 4, 8, 12, 16, 20, 24 (e.g., p-8, py-20, gap-12)
- **Container**: max-w-7xl, px-8 on mobile, px-12 desktop
- **Vertical Rhythm**: py-24 to py-32 between major sections
- **Grid**: 2-column desktop (md:grid-cols-2), 3-column for feature cards (lg:grid-cols-3)

## Hero Section
**Full-width hero with professional image**
- **Layout**: Asymmetric 60/40 split (image left, content right) or full-bleed with centered overlay
- **Image**: Professional legal tech imagery - modern office, digital interfaces, or abstract warm-toned technology patterns
- **Overlay**: Subtle dark gradient (from-black/80 to-transparent) for text readability
- **Content**: Left-aligned headline + subhead + single primary CTA
- **Button**: Amber background with blur backdrop, white text, 6px border-radius
- **Height**: min-h-screen on desktop, min-h-[600px] mobile

## Component Library

### Service Cards
- Background: #141414 with 1px warm charcoal border
- Left accent border: 3px amber/copper/gold (rotate)
- Border-radius: 8px (refined, not brutalist)
- Padding: p-8
- Hover: Border brightens, subtle lift with shadow-lg transition

### Feature Grid
- 3-column desktop, 2-column tablet, 1-column mobile
- Icon: Amber colored, 24x24, top-aligned
- Title: Semibold, soft white
- Description: Warm gray body text
- Spacing: gap-8 between cards, gap-4 internal

### CTA Sections
- Centered layout with max-w-3xl
- Amber gradient background (from-amber-900/20 to-transparent)
- Border: 1px warm charcoal, 12px border-radius
- Internal padding: py-16, px-8

### Testimonials
- Dark surface cards with warm border
- Client name: Copper accent
- Quote: Larger body text, warm gray
- Layout: 2-column grid or horizontal scroll

## Images
**Strategic image placement:**
1. **Hero**: Full-width professional imagery (modern legal tech environment, warm-toned abstract technology, or sophisticated office space)
2. **Services Section**: Optional smaller accent images (400x300) showcasing software interfaces or team collaboration
3. **About/Team**: Professional headshots or team photos with warm color grading

## Micro-Animations
- **Page Load**: Subtle fade-in for hero content (0.6s ease)
- **Scroll Reveals**: Cards fade up on scroll (intersection observer)
- **Hover States**: Smooth color transitions (duration-300), subtle scale (scale-105)
- **Button Interactions**: Gentle glow effect on hover
- **Navigation**: Smooth scroll behavior

## Interactive States
- Border transitions: #2a2520 → #3a3530
- Text color shifts: Warm gray → Amber on hover
- Button hover: Slight darken with shadow-lg
- All transitions: transition-all duration-300 ease-in-out

## Sections Structure
1. **Hero**: Full-screen with image, headline, subhead, CTA
2. **Value Proposition**: 3-column feature grid with icons
3. **Services Deep Dive**: 2-column alternating layout (text/image)
4. **Process**: Horizontal timeline or step cards
5. **Social Proof**: Testimonials grid
6. **About/Team**: Editorial layout with team imagery
7. **CTA Section**: Centered conversion focus
8. **Footer**: Multi-column (services, resources, contact, legal)

## Key Principles
- Calm, generous whitespace - never cramped
- Warm metallics create approachable luxury
- Editorial sophistication through balanced grids
- Subtle animations enhance, never distract
- Premium feel without intimidation
- Trust through professional imagery and refined execution