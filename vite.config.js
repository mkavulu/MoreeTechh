// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // 1. Completely bypass Base64 encoding checks
    assetsInlineLimit: 0,
    // 2. Skip legacy syntax transforms for faster module emitting
    target: 'esnext',
    // 3. Prevent bundler from reading full asset source trees into memory
    modulePreload: false,
  },
});