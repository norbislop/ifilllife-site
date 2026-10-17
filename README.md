# iFillLife

A practical, content-first website starter for iFillLife. The first version has
a complete homepage, a journal, two editable starter articles, and a custom 404
page. The proposed editorial direction is money, small business, and everyday
decisions. The copy and visual identity are a starting point for review.

**Stack:** Astro, TypeScript, Markdown, and plain CSS. Astro builds real HTML
pages, so the current site works without client-side JavaScript. No database,
paid service, or API key is required.

## Run it on your computer

1. Install [Node.js 24 LTS](https://nodejs.org/) and [Git](https://git-scm.com/).
2. Open a terminal and run:

```bash
git clone https://github.com/norbislop/ifilllife-site.git
cd ifilllife-site
npm ci
npm run dev
```

3. Open the local address printed in the terminal, normally
   `http://localhost:4321`. Leave the terminal running while you edit.

If you use `nvm`, run `nvm use` in this folder. The `.nvmrc` file selects Node 24.

## Your first edits

| What you want to change | Where to edit |
| --- | --- |
| Name, tagline, default page description, contact email | `src/config/site.ts` |
| Homepage headings, paragraphs, topics, button labels | `src/data/home.ts` |
| Colors, fonts, spacing, responsive styles | `src/styles/global.css` |
| Logo and browser icon | `src/components/Brand.astro`, `public/favicon.svg` |
| Homepage section order | `src/pages/index.astro` |
| Articles | `src/content/journal/*.md` |
| Future services | `src/data/services.ts` |
| Navigation | `src/components/SiteHeader.astro` |

Detailed steps: [Customize the site](docs/CUSTOMIZE.md).

## Folder guide

| Folder | Purpose |
| --- | --- |
| `src/pages/` | Website routes. `index.astro` is the homepage. |
| `src/layouts/` | Shared HTML document, metadata, header, and footer. |
| `src/components/` | Reusable sections and UI elements. |
| `src/config/` | Site-wide settings and brand details. |
| `src/data/` | Editable homepage copy and future service listings. |
| `src/content/journal/` | Markdown articles with validated metadata. |
| `src/lib/` | Small helpers for internal links and published content. |
| `src/styles/` | Design tokens, layout, and responsive CSS. |
| `public/` | Files served unchanged, such as icons and images. |
| `docs/` | Editing, content, and deployment instructions. |
| `.github/workflows/` | Automated build checks on pushes and pull requests. |

Generated folders (`node_modules/`, `.astro/`, and `dist/`) are ignored by Git.
Do not edit them to change the site.

## First homepage layout

1. **Header:** iFillLife identity, topic/journal/about navigation.
2. **Hero:** “Make room for better decisions.” Two working links lead to the
   journal and the purpose section.
3. **Topics:** money and financing, small business, everyday life, and lessons.
   These describe the editorial direction, not a catalog of published guides.
4. **Journal:** two starter articles with real article pages.
5. **Purpose:** a short introduction to the idea behind iFillLife.
6. **Services:** prepared in code; hidden while the services array is empty.
7. **Closing invitation:** links to the first article.
8. **Footer:** site identity, navigation, and an optional real email link.

## Commands

| Command | What it does |
| --- | --- |
| `npm ci` | Installs the exact dependency versions in the lockfile. |
| `npm run dev` | Starts the local development server. |
| `npm run check` | Checks Astro templates, TypeScript, and content schemas. |
| `npm run build` | Runs checks and produces the static site in `dist/`. |
| `npm run preview` | Lets you inspect the production build locally. |

Commit `package-lock.json` when dependencies change. Avoid using `npm update`
as a routine editing step; dependency updates should be checked separately.

## What is and is not connected

This repository is a standalone starter. It does not modify an existing
WordPress installation, domain, hosting account, or advertising configuration.
Pushing code does not automatically publish a website.

Services and a contact address have not been confirmed, so those are hidden.
There is no pretend contact form, newsletter signup, checkout, analytics, or
booking flow. Add a real destination or integration when the offering is ready.
The starter contains no customer claims, testimonials, or personal backstory.

The two visible articles are editable starter copy, not imported posts or
statements of the owner's personal experience. The example draft is excluded
from listings and generated pages, but this repository is public: **draft source
files are still visible on GitHub.** Never commit private notes or credentials.

## Build and launch

See [Deployment](docs/DEPLOYMENT.md) for root-domain and subdirectory settings.
The final brand, service offers, contact details, and domain can be added without
restructuring the project. Review the starter copy before a public launch.

## References

- [Astro setup](https://docs.astro.build/en/install-and-setup/)
- [Astro content collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro deployment](https://docs.astro.build/en/guides/deploy/)
