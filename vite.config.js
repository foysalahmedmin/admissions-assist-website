<<<<<<< HEAD
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    optimizeDeps: {
        force: true,
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
        },
    },
})
=======
/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

// vite.config.js
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  define: {
    "process.env": process.env,
  },
});
>>>>>>> update-project/main
