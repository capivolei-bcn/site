// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "pt",
    locales: ["es", "pt"],
    fallback: {
      es: "pt",
    },
  },
});
