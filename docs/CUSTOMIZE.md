# Make it yours

## 1. Update the name and introduction

Open `src/config/site.ts`. Change the name, page title, description, and tagline.
Leave `contactEmail` empty until you have a real, monitored address. When you
fill it in, a working email link appears in the footer.

Open `src/data/home.ts` for the homepage text. Keep the existing property names;
replace the words inside quotes. Use straight quotes around code strings. If a
sentence includes an apostrophe, wrap the whole string in double quotes.

The homepage's hero, topics, journal introduction, purpose, and closing block
are all editable here. The short decorative hero panel lives in
`src/components/Hero.astro`.

## 2. Adjust the branding

At the top of `src/styles/global.css`, change the variables under `:root`.
The starter uses ivory, forest green, sage, and muted gold. Fonts are local
system fonts, so there are no font-service accounts or remote font requests.

Replace the simple SVG mark in `src/components/Brand.astro` and the matching
`public/favicon.svg` when you have an approved logo. The placeholder mark and
plant illustration are editable SVG source, not fixed images.

After changing colors, check text contrast, visible keyboard focus, and buttons.
After changing fonts, check long headings on a phone-sized screen.

## 3. Add an article

Copy `src/content/journal/example-draft.md` to a descriptive filename, such as
`a-question-worth-asking.md`. Edit the metadata between the `---` lines:

```yaml
---
title: A question worth asking
description: A short, specific summary that helps a reader decide to open it.
category: Everyday life
order: 3
draft: true
---
```

Write your article below the second `---`. Markdown supports plain paragraphs,
`## Section headings`, `**bold text**`, bullet lists, and `[links](https://example.com)`.
The page template already supplies the main heading, so use `##` for sections.

Change `draft` to `false` when ready. The site will create
`/journal/a-question-worth-asking/` and add it to the journal. The homepage shows
the first two published entries, ordered by the `order` number, then by title.
All entries default to draft when that field is omitted.

Drafts are excluded from the built site, including direct article URLs. Their
source text remains visible in this public GitHub repository.

Keep article filenames stable once published. If you rename a file, its URL
changes and any old links will need redirects configured at your host.

The closing homepage button points to `start-with-one-good-question`. If you
remove or unpublish that article, update `home.closing.href` in
`src/data/home.ts` to another published page.

## 4. Add a real service when it is ready

The `services` array in `src/data/services.ts` is intentionally empty. A nonempty
array adds a services section to the homepage and a navigation link.

Each service needs a title, description, button label, and working destination.
For example, after creating `src/pages/services/your-service.astro`, add:

```ts
export const services: Service[] = [
  {
    title: 'Your confirmed service',
    description: 'Explain who it helps and what is included.',
    linkLabel: 'Explore this service',
    href: '/services/your-service/',
  },
];
```

This is a schema example, not an existing offer. Create and check the destination
page before adding the listing. An existing HTTPS booking URL is also supported.
Avoid promises, prices, qualifications, and results that have not been confirmed.

## 5. Add a page

Create `src/pages/contact.astro` to make `/contact/`. Reuse the shared layout:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Contact | iFillLife" description="Get in touch with iFillLife.">
  <section class="container page-intro">
    <h1>Get in touch.</h1>
    <p>Add your confirmed contact details here.</p>
  </section>
</BaseLayout>
```

Add the link to `SiteHeader.astro` or `SiteFooter.astro`. For internal URLs use
`withBase('contact/')`, imported from `src/lib/paths.ts`, so links work whether
the site is hosted at a domain root or under a path.

Use `withBase('#about')` for a homepage anchor from another page. Use `#about`
only when the target is on the current page.

## Before committing an edit

Run `npm run build`, then `npm run preview`. Check navigation, article links,
keyboard focus, and the homepage at narrow and wide widths. The build verifies
code and content metadata; it cannot tell you whether a business claim is true
or whether an external booking destination is correct.
