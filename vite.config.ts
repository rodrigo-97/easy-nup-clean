import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    include: ["**/(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules", "dist", ".git"],
    dir: "src",
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve("src"),
      },
    ],
  },
});
