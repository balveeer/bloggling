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
            "src": "screenshotwide1200x630.jpg",
             "sizes": "1200x630",
             "type": "image/jpg",
             "form_factor": "wide",
             "label": "drip, drippy, drippin'",
             
           },
          {
            "src": "screenshotnarrow1080x2344a.jpg",
             "sizes": "1080x2344",
             "type": "image/jpg",
             "form_factor": "narrow",
             "label": "drip, drippy, drippin'"
          },
          {
            "src": "screenshotnarrow1080x2344b.jpg",
             "sizes": "1080x2344",
             "type": "image/jpg",
             "form_factor": "narrow",
             "label": "drip, drippy, drippin'"
          },
        ]

      }
    })
  ]
})