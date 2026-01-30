## Purpose
Short guidance for AI coding agents to be immediately productive in this repository.

## Big picture
- **App type:** Vite + React single-page site. Entry: [src/main.jsx](src/main.jsx). App root: [src/App.jsx](src/App.jsx).
- **Component model:** Simple component tree in `src/components` (PascalCase components, default exports). Example: `App` mounts `Navbar` and `Hero` ([src/components/Navbar.jsx](src/components/Navbar.jsx), [src/components/Hero.jsx](src/components/Hero.jsx)).
- **Styling:** Tailwind CSS directives live in [src/index.css](src/index.css) (`@tailwind base/components/utilities`). Tailwind is therefore applied via CSS, not special runtime code.

## Build / dev / lint workflows (explicit)
- Local dev: `npm run dev` (runs `vite`).
- Production build: `npm run build` (runs `vite build`).
- Preview built output: `npm run preview`.
- Linting: `npm run lint` (runs `eslint .`).
- Files: see `package.json` scripts for exact commands.

## Project-specific conventions & patterns
- Files use the `.jsx` extension for React components. Prefer creating new components as `PascalCase.jsx` with a default export.
- CSS entry: [src/index.css](src/index.css) contains Tailwind directives — add global Tailwind utilities here.
- Component composition is local and direct (no central state management). Look for sibling imports under `src/components`.
- Minimal router usage: `create-react-router` is listed in dependencies but the repo currently has no router setup; check before adding routing code.

## Integration points & dependencies to watch
- Vite config: [vite.config.js](vite.config.js) registers the React plugin; overall tooling is Vite-centric.
- Tailwind-related packages present in `package.json` (`tailwindcss`, `@tailwindcss/vite`), but Tailwind is initialized via `src/index.css`.
- Additional libraries present: `framer-motion`, `create-react-router` — search usages before modifying.

## Helpful file references (examples)
- App entry: [src/main.jsx](src/main.jsx)
- Root component: [src/App.jsx](src/App.jsx)
- Global CSS: [src/index.css](src/index.css)
- Example component: [src/components/Navbar.jsx](src/components/Navbar.jsx)

## When editing code — actionable rules for agents
- Preserve the `src/index.css` Tailwind directives; add new utility classes there only when truly global.
- New components: add under `src/components`, use `.jsx`, export default, and import from their parent component file.
- Before adding new dev plugins or changing `vite.config.js`, check `package.json` for existing deps and prefer reusing installed packages.
- Run `npm run lint` locally (or via CI) after edits; fix any ESLint errors rather than suppressing rules.

## What I cannot infer (ask the maintainer)
- Any CI/CD deploy steps or hosting targets (the repo lacks GitHub Actions or Netlify/Vercel config).
- Team conventions for commits/branches or PR templates.

If anything here is unclear or you want more/less detail (examples, code snippets, CI notes), tell me which section to expand.
