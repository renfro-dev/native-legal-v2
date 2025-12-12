# replit.md

## Overview

This is a marketing/landing page website for an Information Architecture, Adoption, and Orchestration Services company. The application provides strategic AI orchestration services for leadership teams, helping them capture context from chat, email, and meetings to convert into actionable tasks. Built as a full-stack TypeScript application with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with a custom dark editorial brutalist theme
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom Replit plugins for development

### Design System
The application follows a "Dark Editorial Brutalist" design approach:
- Near-black background (#0a0a0a) with dark gray cards (#111111)
- Mint green primary accent (#98FF98) with secondary accents in royal blue, golden yellow, and hot pink
- Inter font family throughout
- Minimal border-radius (4px max) for sharp brutalist feel
- Left-aligned layouts for editorial sophistication

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with tsx for TypeScript execution
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be swapped for database

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for shared types between frontend and backend
- **Migrations**: Drizzle Kit for schema management (`drizzle-kit push`)
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod

### Build System
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: 
  - Frontend: Vite builds to `dist/public`
  - Backend: esbuild bundles server to `dist/index.cjs`
  - Selective dependency bundling for faster cold starts

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Route components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and query client
├── server/           # Backend Express application
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage abstraction
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Database schema and types
└── migrations/       # Drizzle database migrations
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session storage for Express sessions

### UI Libraries
- **Radix UI**: Full suite of accessible UI primitives (dialog, dropdown, tabs, etc.)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component
- **cmdk**: Command menu component
- **vaul**: Drawer component
- **react-day-picker**: Calendar/date picker

### Development Tools
- **Replit Plugins**: 
  - `@replit/vite-plugin-runtime-error-modal`: Error overlay
  - `@replit/vite-plugin-cartographer`: Development mapping
  - `@replit/vite-plugin-dev-banner`: Development banner

### Form & Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Zod resolver for form validation
- **zod**: Schema validation