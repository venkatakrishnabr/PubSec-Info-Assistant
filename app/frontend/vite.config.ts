import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssNesting from 'postcss-nesting';
 
// https://vitejs.dev/config/

export default defineConfig({
    plugins: [react()],
    root: "./",
    build: {
        outDir: "../backend/static",
        emptyOutDir: true,
        sourcemap: true
    },
    server: {
        host: '127.0.0.1',
        watch: {
          usePolling: true,
          interval: 100, // Poll every 100ms
        },
        proxy: {
            "/ask": "http://localhost:5000",
            "/chat": "http://localhost:5000"
        }
    },
    css: {
        postcss: {
            plugins: [
                postcssNesting
            ],
        },
    }
});