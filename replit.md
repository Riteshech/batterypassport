# ChargeUp Battery Passport

## Overview
A React/TypeScript frontend application for battery digital passport management. Built with Vite, React 19, and TypeScript. Uses Recharts for data visualization and Lucide React for icons.

## Architecture
- **Frontend only** — static SPA (Single Page Application)
- **Framework:** React 19 with TypeScript
- **Build tool:** Vite 6
- **Port:** 5000 (dev server)

## Project Structure
- `App.tsx` — Root application component
- `index.tsx` — Entry point
- `index.html` — HTML template
- `components/` — React components
  - `LandingPage.tsx` — Landing/home page
  - `LoginGate.tsx` — Authentication gate
  - `Dashboard.tsx` — Main dashboard
  - `DashboardHeader.tsx` — Dashboard header
  - `BatteryRegistry.tsx` — Battery registry view
  - `BmsDetails.tsx` — Battery Management System details
  - `ComplianceSection.tsx` — Compliance information section
  - `Compliances.tsx` — Compliance list
  - `PhysicalSpecs.tsx` — Physical specifications
  - `SpecsGrid.tsx` — Specifications grid layout
  - `TechnicalSpecs.tsx` — Technical specifications
- `types.ts` — TypeScript type definitions
- `constants.ts` — App constants/data
- `vite.config.ts` — Vite configuration

## Key Configuration
- Vite configured to use port 5000 with `host: '0.0.0.0'` and `allowedHosts: 'all'` for Replit proxy compatibility
- Optional: Set `GEMINI_API_KEY` environment variable for AI features

## Workflows
- **Start application** — `npm run dev` on port 5000 (webview)

## Deployment
- Type: Static site
- Build command: `npm run build`
- Public directory: `dist`
