# Design Guidelines: Dark Editorial Brutalist Website

## Design Approach
**Neo-Brutalist Editorial Style** - Modern, sophisticated dark website with editorial feel and brutalist accents. Professional yet playful through strategic color pops.

## Color Palette
- **Background**: Near-black (#0a0a0a)
- **Card/Surface**: Dark gray (#111111)
- **Borders**: Subtle gray (#333333), hover (#444444)
- **Body Text**: Muted gray (#888888)
- **Secondary Text**: Light gray (#999999)
- **Primary Accent**: Mint green (#98FF98)
- **Secondary Accents**: Royal blue (#4169E1), Golden yellow (#FFD700), Hot pink (#FF69B4)

## Typography
- **Font Family**: Inter (Google Fonts) - single font throughout
- **Headlines**: Bold weight, tight letter-spacing (tracking-tight), white color
- **Body**: Regular weight, muted gray (#888888)
- **Category Labels**: Small caps, uppercase, tracking-wider, colored with accent colors
- **Alignment**: Left-aligned layouts for editorial sophistication (avoid centered hero sections)

## Layout System
- **Spacing Units**: Generous vertical spacing - py-20 to py-24 between sections
- **Container**: max-w-7xl with generous padding
- **Grid Layouts**: 2-3 columns on desktop for cards
- **Section Dividers**: Subtle top borders using #222222

## Component Specifications

### Hero Section (No Image)
- Left-aligned layout
- H1: "Information Architecture, Adoption, and Orchestration Services" (white, bold, tracking-tight)
- Subheader: "We use modern tools to create leverage for leadership teams..." (muted gray)
- Four value proposition bullets with mint green accent markers:
  - Get bird's eye view of your business
  - Detect and address business threats proactively
  - Empower and coach your teams more effectively
  - Capture and delegate key tasks

### Why Section
- Headline: "Why?" (bold, white)
- Body text explaining context capture and orchestration importance

### Features/Services Grid
- 2-3 column grid layout
- Cards: Dark background (#111111) with 1px borders (#333333)
- Colored left-border accents (2px width): Rotate through mint, royal blue, golden yellow, hot pink
- Minimal border-radius: 4px maximum

## UI Elements
- **Border Radius**: 4px maximum for sharp, brutalist feel
- **Borders**: 1px in #333333
- **Cards**: #111111 background with subtle #333333 borders
- **Buttons**: Solid fills (white or mint green) with 4px border-radius max
- **Background Effects**: Subtle gradient blurs at 20% opacity for depth

## Interactive States
- Border color lightens on hover (#333 → #444)
- Text color transitions to mint green (#98FF98) on hover
- Buttons darken slightly on hover
- Smooth transitions using transition-colors

## Images
**No hero image required** - This design relies on typography and color to create impact. The left-aligned hero section uses bold typography and mint green accent bullets against the dark background for visual interest.

## Content Hierarchy
1. Hero section with headline, subheader, four bullet points
2. Why section with explanation
3. Features/services grid with colored accent cards
4. Additional sections as needed with consistent dark editorial styling

## Key Design Principles
- Editorial sophistication through left-alignment
- Brutalist sharpness through minimal border-radius
- Professional darkness balanced with playful accent pops
- Typography and color doing the heavy lifting
- Minimal decoration, maximum impact