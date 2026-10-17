import { defineConfig } from 'astro/config';

// Node 24 loads .env without an extra dependency. Environment variables set by
// your hosting provider take precedence over values in this optional file.
try {
  process.loadEnvFile();
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
});
