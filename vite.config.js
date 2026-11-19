
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// configure the Vite proxy
// so the Vue app can communicate with the Express server.

export default defineConfig({
  plugins: [vue()],

  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
