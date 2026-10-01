# ThreatLens — Frontend

Public landing page and route shell for ThreatLens, built with **React + TypeScript + Vite**
and **React Router**.

## Commands

```bash
npm install     # install dependencies
npm run dev     # start the dev server
npm run build   # typecheck (tsc -b) + production build
npm run preview # serve the production build
npm run lint    # oxlint
```

## Routes

| Route        | Component                 | State                                          |
| ------------ | ------------------------- | ---------------------------------------------- |
| `/`          | `pages/Home.tsx`          | Complete landing page                          |
| `/dashboard` | `pages/Dashboard.tsx`     | Placeholder — mount the app shell here         |
| `/downloads` | `pages/DownloadsPage.tsx` | Lists build targets from `data/downloads.ts`   |
| `/login`     | `pages/Login.tsx`         | Placeholder — no auth backend connected yet    |
| `/signup`    | `pages/Signup.tsx`        | Placeholder — no auth backend connected yet    |
| `*`          | `pages/NotFound.tsx`      | 404                                            |

Auth buttons are wired to routes only. No authentication logic is implemented.

## Structure

```
src/
├── components/     # Navbar, Hero, About, Features, Workflow,
│                   # Downloads, DashboardPreview, CTA, Footer, Icon, …
├── pages/          # Home + one file per route
├── data/           # site config, navigation, features, downloads, workflow,
│                   # dashboardPreview (sample data)
├── hooks/          # useReveal, useDismiss, useScrolled, useReducedMotion
└── index.css       # design tokens + shared primitives (.tl-btn, .tl-panel, …)
```

Each component owns a sibling `.css` file. Shared tokens and primitives live in
`src/index.css`; nothing else defines colors directly.

## Configuration

All outbound URLs are centralized — no fake links are hardcoded anywhere.

- **`src/data/site.ts`** — `ROUTES` and `PROJECT_LINKS` (GitHub, documentation,
  security, contact). `PROJECT_LINKS` entries are empty strings; the footer renders
  those as inert "soon" items until a real URL is set.
- **`src/data/downloads.ts`** — one entry per build target. Setting `url` on an
  `available` target activates its download button; while `url` is empty the UI shows
  *Link pending*. `coming-soon` targets render as *Coming Soon*.

```ts
{
  id: 'windows-agent',
  platform: 'Windows Agent',
  status: 'available',
  statusLabel: 'Development Build',
  url: '',            // ← set this to publish a release artifact
  version: '0.1.0-dev',
}
```

## Dashboard preview

`src/data/dashboardPreview.ts` holds clearly-labelled **sample** data used only by the
marketing preview on `/`. It is never fetched from the backend — wire live API data into
the real `/dashboard` route instead.

## Design & accessibility notes

- Dark SOC-style theme: deep navy base, cyan/blue accents, thin borders, soft glows.
- Semantic landmarks, one `<h1>` per page, labelled sections, skip link.
- Dropdowns use real `<button>` elements with `aria-expanded` / `aria-controls`, close on
  outside click and `Escape`, and return focus to their trigger.
- All animations are suppressed under `prefers-reduced-motion: reduce`.
- Breakpoints: 1040 / 1000 / 960 / 900 / 760 / 620 / 560 / 420 px.
