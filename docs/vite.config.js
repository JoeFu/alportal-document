import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vitepress";
import path from "path";


export default defineConfig({
  plugins: [
    SearchPlugin({
      previewLength: 62,
      buttonLabel: "Search",
      placeholder: "Search docs",
      encode: false,
      // allowing non full word
      tokenize: "full"
    }),
  ],
  resolve: {
    alias: {
      "vitepress-plugin-mermaid/Mermaid.vue": path.join(
        __dirname,
        "../dist/Mermaid.vue"
      ),
    },
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ["../.."],
    },
  },
});
