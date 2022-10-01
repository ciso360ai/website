import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";
import { SITE } from './src/config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  output: 'static',
  integrations: [
    tailwind({
    config: {
      applyBaseStyles: false
    }
  }),
  image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }),
  sitemap(),
  partytown({
    config: {
      forward: ['dataLayer.push']
    }
  }),
  mdx()
],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  }
});