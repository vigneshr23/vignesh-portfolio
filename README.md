# Vignesh R — Portfolio Parking Page

A minimal Next.js 14 parking page built with the App Router, Tailwind CSS, and Google Fonts (DM Serif Display + DM Mono).

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Customise

All personalisation is in **`app/page.tsx`**:

| What | Where |
|------|-------|
| Your links (email, GitHub, etc.) | `LINKS` array at the top |
| Domain label (top-left) | `vignesh.dev` string in the header |
| Tagline | paragraph below the divider |

Light/dark mode colours live in **`app/globals.css`** under `:root` and `@media (prefers-color-scheme: dark)`.

## Build & deploy

```bash
npm run build
npm run start
```

Works out-of-the-box on Vercel — just push to GitHub and import the repo.
