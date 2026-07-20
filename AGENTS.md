# AGENTS.md

## What this is

A single-page React app that renders a self-paced data analytics study roadmap: a sidebar of phases and topics, a detail pane per topic, and per-topic progress tracking (status + notes) persisted locally with optional sync to a private GitHub Gist.

It is a personal learning tool, not a product. There are no tests and no backend.

**`README.md` is the untouched Vite template. Ignore it.** Trust the code and this file.

## Stack

React 19 + TypeScript + Vite 8, Tailwind CSS v4 (via `@tailwindcss/vite`, no `tailwind.config.js`), `lucide-react` for icons. Deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`.

`vite.config.ts` sets `base: '/de-study-roadmap/'`. Any asset referenced by path must go through a Vite import or `import.meta.env.BASE_URL` — a bare `/foo.svg` breaks on Pages but works in dev.

## Commands

```
npm run dev      # vite dev server (https if certs/ exists, host exposed on LAN)
npm run build    # tsc -b && vite build — this is the typecheck
npm run lint     # eslint
```

`npm run ca` serves the local mkcert root CA on :8080 so a phone on the same network can trust the dev server's cert. `certs/` is gitignored; HTTPS silently falls back to HTTP when it is absent.

## Architecture

- `src/data/roadmap.ts` — the entire content of the app. Seven phases of `Topic` objects built with the `t()` and `r()` helpers at the top of the file. Each topic carries `why` (long prose), `what` (bullet array), `where` (why it sits at this point in the roadmap), and `resources`. Prose is markdown-ish and rendered by `MarkdownText.tsx`, which supports only `**bold**`, `` `code` ``, and links — do not use other markdown syntax in content strings.
- `src/hooks/useProgress.tsx` — context provider owning all progress state. Writes to `localStorage` on every change; `saveToGist`/`loadFromGist` talk to the GitHub Gists API with a user-supplied PAT. Both import paths validate shape before accepting data.
- `src/App.tsx` — layout, sidebar resize, and routing. There is no router: `selectedTopicId` is a single piece of state, and the sentinel `'__settings__'` selects the settings page instead of a topic.
- `src/index.css` — the design system, as Tailwind v4 `@theme` tokens plus a `.dark` override block. Colors, spacing, radii, and shadows all live here.

## Conventions

- **Use the semantic tokens, never raw colors.** `bg-canvas-soft`, `text-ink-muted`, `border-hairline`, `text-primary`, `shadow-notion`. A literal hex or a stock Tailwind color like `bg-gray-100` is a bug — it will not respond to dark mode.
- Dark mode is a `.dark` class on the root element, toggled by `useTheme`. Because the tokens are redefined under `.dark`, correctly-written components need no `dark:` variants at all.
- `DESIGN.md` is the source design language (a Notion analysis) that `index.css` implements. Consult it for intent — spacing rhythm, when accent colors are allowed, elevation philosophy — before adding new visual patterns.
- Components are named exports in `src/components/`, one component per file, no index barrels.
- Adding roadmap content means editing `roadmap.ts` and nothing else. Topic `id` values are stable keys for stored progress — **renaming an id silently orphans the user's saved status and notes for that topic.**

## Known state

`src/components/SettingsModal.tsx` is dead code, superseded by `SettingsPage.tsx`. Leave it unless asked.

## Verification

`npm run build && npm run lint` must both pass. For visual changes, run `npm run dev` and confirm the result in both light and dark mode.
