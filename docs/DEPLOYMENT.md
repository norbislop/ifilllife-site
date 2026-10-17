# Deployment

This project produces static files. It does not require a Node server at
runtime. The build requires Node 24; the output can be served by a static host.

## Build settings

| Setting | Value |
| --- | --- |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | `24` |

Do not deploy the source folder or `node_modules`. Publish the contents of
`dist` after a successful build. Configure the host to serve directory indexes
and use the generated `404.html` for missing pages. This is a multi-page static
site; an SPA fallback to `index.html` is not needed.

## Set the real URL

For local configuration, copy `.env.example` to `.env` and set:

```dotenv
SITE_URL=https://your-real-domain.example
BASE_PATH=/
```

Replace the example origin with the actual deployed origin. On a hosting
platform, set the same values in its build environment. No API keys are needed.
Rebuild after changing these settings.

Until `SITE_URL` is set, pages omit canonical and Open Graph URL fields instead
of advertising a guessed domain. Page titles and descriptions still work.

`BASE_PATH` is the path where the site lives. For a GitHub Pages project under
the repository name, use:

```dotenv
SITE_URL=https://norbislop.github.io
BASE_PATH=/ifilllife-site/
```

These are configuration examples, not a claim that Pages is enabled. Choose a
host and configure deployment separately. The included GitHub Actions workflow
only checks the build; it does not publish, set DNS, or turn on GitHub Pages.

## Existing WordPress site

This starter is independent of any existing iFillLife WordPress installation.
It is not a WordPress theme and cannot be pasted into a Custom HTML block.

If you later replace an existing site, first inventory its URLs and content,
plan redirects, and account for forms, advertising, and analytics. Copying this
starter over an existing site would not migrate those features automatically.
The current repository work makes no changes to that installation or domain.

## Launch review

Review the draft branding and starter articles. Add confirmed contact details
and service destinations if needed. Check the final domain and all navigation
links. Review the site on a phone and with keyboard navigation. Add a sitemap,
social preview image, and any policies appropriate to the integrations you
actually enable when you prepare the public launch.

The starter does not install analytics, ads, or forms. Do not paste private
credentials into source files; this repository is public.
