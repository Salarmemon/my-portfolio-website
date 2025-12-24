<!-- .github/copilot-instructions.md for portolio-site -->
# Guidance for AI coding assistants

This is a Create React App (CRA) portfolio website with client-side routing. The guidance below captures the project's structure, conventions, and developer workflows so an AI agent can be productive quickly.

## High level
- **Project type:** Create React App with React Router v7 for navigation.
- **Entry point:** [src/index.js](src/index.js) mounts [src/App.js](src/App.js).
- **Components:** Reusable UI elements in [src/components/](src/components/) (functional components, lowercase filenames).
- **Pages:** Route-based page views in [src/pages/](src/pages/) (`about.js`, `projects.js`, `certifications.js`).
- **Assets:** Images, certificates, and media in [src/assets/](src/assets/) (certificate images and profile photo).
- **Styles:** Global CSS in [src/index.css](src/index.css). [src/App.css](src/App.css) is empty (left for future use). Component-scoped CSS modules used for [src/components/header.module.css](src/components/header.module.css).

## Architecture & common flows
- **Routing:** [src/App.js](src/App.js) wraps `<BrowserRouter>` with `<Routes>` mapping paths to pages. Default route `/` and `/about` both show `<About />`.
- **Structure:** `index.js` → `App` → `BrowserRouter` + `Header` + `Routes` + `Contact`. Shared components (`Header`, `Contact`) persist across route changes.
- **Pages:** Each page (e.g., [src/pages/about.js](src/pages/about.js)) is a simple function component exported as default, rendered by a `<Route>`.
- **Components:** Small, focused (e.g., [src/components/header.js](src/components/header.js) with navigation links using `<Link>` from React Router).

## Developer workflows (commands)
- **Start dev server:** `npm start` — runs `react-scripts start`, opens `http://localhost:3000`, hot reload on save.
- **Run tests:** `npm test` — uses `@testing-library/react` in watch mode. Setup via [src/setupTests.js](src/setupTests.js).
- **Build production:** `npm run build` — creates optimized bundle in `build/`.
- **Lint/format:** No linter/formatter configured. Follow existing file style.

## Key dependencies & integration points
- **React Router v7:** [src/App.js](src/App.js) uses `<BrowserRouter>` with `<Routes>`. Always use `<Link>` from React Router for internal navigation, **never** `<a>` tags.
- **Pages structure:** Portfolio has dedicated pages in [src/pages/](src/pages/) (`about.js`, `projects.js`, `certifications.js`). Each is a simple functional component with default export.
- **External links:** Hardcoded in components (e.g., GitHub, LinkedIn, Fiverr in [src/components/contact.js](src/components/contact.js)).
- **No backend:** Fully static client-side portfolio. No API calls or server integration.
- **Testing:** `@testing-library/react` available for component tests.

## Repository-specific conventions
- **Components:** Functional components with default exports. Existing files use lowercase names (e.g., `header.js`, `contact.js`). Keep import paths matching actual filenames (Windows is case-insensitive but CI may be strict).
- **CSS Modules:** [src/components/header.module.css](src/components/header.module.css) is a CSS module imported as `import headerStyles from "./components/header.module.css"` and used with className binding like `className={headerStyles.header}`.
- **Global styles:** Most styling lives in [src/index.css](src/index.css) with standard class selectors (`.project`, `#about`, `#hire-me-btn`, etc.).
- **Props:** Plain props with minimal validation. Inspect [src/App.js](src/App.js) to see how components are called.
- **Imports:** Use relative imports (e.g., `import Header from './components/header'`). Do not convert to absolute paths.

## Testing & debugging
- Tests should use `@testing-library/react`. [src/setupTests.js](src/setupTests.js) is configured—use it for test setup.
- Reproduce UI changes: run `npm start`, edit `src/` files, hot reload is automatic.

## Editing guidance for AI agents
- Make minimal, focused changes. Preserve CRA structure.
- New components go in [src/components/](src/components/) with default export.
- When adding component styles: use CSS modules (`.module.css` files) for component-specific styling, global [src/index.css](src/index.css) for shared/layout styles.
- When modifying a component, add a test if possible.
- Update import paths when renaming files. Preserve case consistency to avoid CI issues on Linux/Mac.
