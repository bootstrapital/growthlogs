import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [],

  vite: {
    plugins: [tailwindcss()],
  },
});
