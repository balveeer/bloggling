import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,jpg,png,svg,webp,aviv}'],
      },
      manifest: {
        name: 'Slik',
        short_name: 'Slik',
        description: "India's finest fashion hand-picked from top brands",
        theme_color: '#F3E8FF',
        background_color: '#F3E8FF',
        start_url: '/',
        display: 'standalone',
        prefer_related_applications: false,
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
        ],
      },
      devOptions: {
        enabled: false, // for enabling pwa in dev mode ;)
      },
    }),
  ],
});