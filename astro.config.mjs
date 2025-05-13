import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-fixed-cloudflaire.com', // Replace with your actual domain
  base: '/', 
  integrations: [
    tailwind()
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: false
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});