import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://example.com",
  trailingSlash: "always",
  server: {
    port: 4323,
  },
  preview: {
    port: 4323,
  },
});
