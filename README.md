# Sarvin's Developer Portfolio

A React + Vite portfolio showcasing AI/ML projects, ESP32 hardware builds,
Godot games, and Firebase-backed web apps.

## Stack

- React 19 + React Router (HashRouter, so it works on GitHub Pages with no
  server rewrite config)
- Vite 7
- Plain CSS with custom properties for dark/light theming (no UI framework)

## Structure

```
src/
├── components/   Navbar, Footer, Hero, ProjectCard, SkillsSection, etc.
├── pages/        Home, Projects, About
├── data/         projects.js — single source of truth for project cards
└── context/      ThemeContext — dark/light mode, persisted to localStorage
```

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

`vite.config.js` sets `base: "/Portfolio/"` to match this repo's GitHub
Pages URL (`daepickid540.github.io/Portfolio/`).

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` via GitHub Pages (Actions-based deployment). In
the repo's **Settings → Pages**, set the source to **GitHub Actions** once.

## Contact

- Email: sarvin.sukhe@gmail.com
- GitHub: [github.com/DaEpickid540](https://github.com/DaEpickid540)
