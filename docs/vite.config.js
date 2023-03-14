import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    SearchPlugin({
      previewLength: 62,
      buttonLabel: "Search",
      placeholder: "Search docs",
      encode: false,
      tokenize: "full"
    }),
  ],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ["../.."],
    },
  },
});
