import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import voie from "vite-plugin-voie";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), voie(), WindiCSS()],
  assetsInclude: ["png", "svg", "otf", "ttf", "ico"],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
});
