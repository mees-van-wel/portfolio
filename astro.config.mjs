// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: "https://meesvanwel.nl",
  i18n: {
    locales: ["nl", "en"],
    defaultLocale: "nl",
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: "nl",
      locales: {
        nl: "nl-NL",
        en: "en-US",
      },
    },
  }), compressor()],
});