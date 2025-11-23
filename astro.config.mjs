// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  i18n: {
    defaultLocale: "de",
    locales: ["en", "de"],
  },
  image: {
    service: passthroughImageService(),
  },
});
