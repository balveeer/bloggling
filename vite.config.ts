import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Bloggling',
        short_name: 'Bloggling',
        description: 'Mind Boggling Blogs...',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        screenshots: [
          {
            "src": "screenshotwide.jpg",
             "sizes": "1655x1107",
             "type": "image/jpg",
             "form_factor": "wide",
             "label": "mind boggling blogs!",
           },
          {
            "src": "screenshotnarrow.jpg",
             "sizes": "1345x1622",
             "type": "image/jpg",
             "form_factor": "narrow",
             "label": "mind boggling blogs!"
          },
          {
            "src": "screenshotmobile.jpg",
             "sizes": "814x1628",
             "type": "image/jpg",
             "form_factor": "narrow",
             "label": "mind boggling blogs!"
          },
        ]
      }
    })
  ]
})