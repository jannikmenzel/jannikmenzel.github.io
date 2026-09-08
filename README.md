![Banner-Top](https://github.com/user-attachments/assets/c6125636-445f-454c-86a5-de527f5afc0c)

<div align="center">

# Jannik Menzel — Portfolio & Blog

Personal portfolio and freelance website of **Jannik Menzel**, Computer Science student at TU Dresden.

[![Deploy to GitHub Pages](https://github.com/jannikmenzel/jannikmenzel.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/jannikmenzel/jannikmenzel.github.io/actions/workflows/deploy.yml)
[![Vortix Quality Check](https://github.com/jannikmenzel/jannikmenzel.github.io/actions/workflows/vortix.yml/badge.svg)](https://github.com/jannikmenzel/jannikmenzel.github.io/actions/workflows/vortix.yml)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.jannikmenzel.me&label=website)](https://www.jannikmenzel.me)
[![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Node](https://img.shields.io/badge/Node-%3E%3D22.12.0-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![License: All Rights Reserved](https://img.shields.io/badge/license-All%20Rights%20Reserved-red.svg)](./LICENSE)

[Website](https://www.jannikmenzel.me) · [Blog](https://www.jannikmenzel.me/blog) · [Projects](https://www.jannikmenzel.me/portfolio) · [Bookmarks](https://www.jannikmenzel.me/bookmarks)

</div>

---

## About

This repository powers [www.jannikmenzel.me](https://www.jannikmenzel.me), a bilingual (DE/EN) portfolio and blog site. It showcases projects, publishes long-form study/blog articles, and links out to social and professional profiles. The site is statically generated with Astro and deployed to GitHub Pages.

## Features

- **Bilingual** — German and English routes via a lightweight i18n setup (`src/i18n`)
- **Blog** — Markdown-driven articles with math rendering (KaTeX/MathJax via `rehype`/`remark`), slugged headings, and auto-linked anchors
- **Portfolio** — Project and bookmark listings driven by typed content collections
- **SEO-ready** — Automatic sitemap generation with route filtering
- **Hardened by default** — Content-Security-Policy hashing integration, external links safely opened in new tabs
- **Accessible math** — Automated accessibility titles/reporting for rendered math content
- **Fully static** — Zero server runtime; built once and served from GitHub Pages behind a custom domain
- **Styled with Tailwind CSS v4** and animated with [Motion](https://motion.dev)
- **Continuous quality checks** — Automated [Vortix](https://github.com/jannikmenzel/vortix-cli) checks (performance, accessibility, SEO, security, privacy) on every push/PR

## Tech Stack

| Category           | Technology                                                  |
| ------------------ | ----------------------------------------------------------- |
| Framework          | [Astro](https://astro.build)                                |
| Styling            | [Tailwind CSS v4](https://tailwindcss.com)                  |
| Animation          | [Motion](https://motion.dev)                                |
| Icons              | [Lucide](https://lucide.dev) via `astro-icon`               |
| Markdown pipeline  | `remark` / `rehype`, MathJax, syntax highlighting via Prism |
| Linting/Formatting | ESLint, Prettier, Husky + lint-staged                       |
| CI/CD              | GitHub Actions / GitHub Pages                               |
| Quality gate       | [Vortix CLI](https://github.com/jannikmenzel/vortix-cli)    |

## Getting Started

### Prerequisites

- Node.js `>=22.12.0`
- npm

### Installation

```bash
git clone https://github.com/jannikmenzel/jannikmenzel.github.io.git
cd jannikmenzel.github.io
npm install
```

### Local Development

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### Other Scripts

| Command            | Description                            |
| ------------------ | -------------------------------------- |
| `npm run build`    | Build the production site into `dist/` |
| `npm run preview`  | Preview the production build locally   |
| `npm run lint`     | Run ESLint                             |
| `npm run lint:fix` | Run ESLint with auto-fix               |
| `npm run format`   | Format the codebase with Prettier      |

## Deployment

The site is automatically built and deployed to **GitHub Pages** on every push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), and served under the custom domain configured in [`CNAME`](./CNAME). A separate [Vortix quality-check workflow](.github/workflows/vortix.yml) runs on every push and pull request to catch performance, accessibility, SEO, security, and privacy regressions before they ship.

## Connect With Me

- **Website:** [www.jannikmenzel.me](https://www.jannikmenzel.me)
- **Blog:** [Studienblog](https://jannikmenzel.me/blog)
- **GitHub:** [@jannikmenzel](https://github.com/jannikmenzel?tab=repositories)
- **Instagram:** [@jnk.mnz](https://www.instagram.com/jnk.mnz/)
- **DEV Community:** [@jnk_mnz](https://dev.to/jnk_mnz)

## License

This project is **not open source**. All rights to the source code, content, and assets in this repository are reserved by the author — see [`LICENSE`](./LICENSE) for details. No part of this repository may be reused, redistributed, or redeployed without prior written permission.

---

![Banner-Bottom](https://github.com/user-attachments/assets/01c94a18-bf4e-4702-a038-0e3108fc4c6c)
