# LRE

Independent Astro static site for **LRE**. Content and branding are placeholders until the site is defined.

## Separate from BBNCS and Fly LRE

This project is **independent** of [BBNCS](https://github.com/adinahsohn-BBNCS/BBNCS) (bbncs.com) and [Fly LRE](https://github.com/adinahsohn-BBNCS/FLYLRE) (flylre.com):

| | LRE (this project) | BBNCS | Fly LRE |
|---|---|---|---|
| Folder | `LRE` | `BBNCS` | `FLYLRE` |
| Dev port | 4323 | 4322 | 4321 |
| Deploy | Own `.env.deploy` | bbncs.com FTPS | flylre.com SFTP |

Never copy deploy config, env files, or site copy between projects unless explicitly intended.

## Setup

```sh
npm install
npm run dev
```

Dev server: http://localhost:4323

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start dev server on port 4323 |
| `npm run build` | Build production site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and upload to production (FTPS) |
| `npm run deploy:dry` | Preview deploy without uploading |

## Deploy

1. Copy `.env.deploy.example` to `.env.deploy` and add your hosting credentials.
2. Update `site` in `astro.config.mjs` when you have a production domain.
3. Run `npm run deploy`.

`npm run deploy` updates **production only** — it does not push to GitHub. Commit and push separately when you want to back up source code.

## Project structure

```
src/
├── data/site.ts          # Site name, nav, copy
├── layouts/BaseLayout.astro
├── pages/index.astro
└── styles/global.css
public/
scripts/deploy.ps1
```

## GitHub

Repository: https://github.com/adinahsohn-BBNCS/LRE
