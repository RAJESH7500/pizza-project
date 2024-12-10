import { defineConfig } from "rollup";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000/",
        changeOrigin: true,
      },
      "/public": {
        target: "http://127.0.0.1:3000/",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
