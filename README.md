# Native Legal

The marketing site for a consultancy that builds modern tools for law firms: AI readiness, revenue operations, and custom software.

## Pages

| Route | Content |
|-------|---------|
| `/` | Overview of the three service lines |
| `/ai-readiness` | AI readiness and change management |
| `/revenue-operations` | CRM, intake, marketing, and recruiting operations |
| `/custom-software` | Rapid prototyping and firm-owned software |
| `/case-study/intake`, `/case-study/recruiting` | Case studies |
| `/privacy` | Privacy policy |

A contact form dialog is available across the site and sends submissions by email through Resend.

## Tech stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Framer Motion, Wouter
- **Backend:** Express with TypeScript
- **Data:** Drizzle ORM on PostgreSQL
- **Hosting:** Built and deployed on Replit

## Run it locally

Requires Node.js 20+ and a PostgreSQL database.

```bash
git clone https://github.com/renfro-dev/native-legal-v2.git
cd native-legal-v2
npm install
export DATABASE_URL=postgresql://user:password@localhost:5432/native_legal
npm run db:push
npm run dev
```

The email and GitHub integrations use Replit connectors, so they only work when the app runs on Replit.

## Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the client and bundle the server to `dist/` |
| `npm start` | Run the production build |
| `npm run check` | Type-check with `tsc` |
| `npm run db:push` | Push the Drizzle schema to the database |

## Project structure

```
client/src/pages/        One file per page
client/src/components/   Animated logo, contact form, shadcn/ui
server/                  Express app, routes, storage, email
shared/schema.ts         Database schema and shared types
```

## Design

The visual system (dark background, warm metallic accents, type rules) is documented in [design_guidelines.md](design_guidelines.md) and [karl-font-rules.md](karl-font-rules.md).
