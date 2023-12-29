import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
      configFile: './tailwind.config.mjs',
+      applyBaseStyles: true,
  })],
  site: 'https://katkamarcincakova.github.io',
  base: '/',
});