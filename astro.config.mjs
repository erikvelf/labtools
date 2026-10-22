// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://labtools.erikv-tools.workers.dev',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
