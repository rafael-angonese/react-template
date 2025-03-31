/// <reference types="vitest" />
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), tailwindcss(), visualizer()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/tests/setup.ts'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          const chunkModulesList = [
            '@mui',
            'lucide-react',
            'lodash',
            'react-dropzone',
            'axios',
            'tailwind-variants',
            'react-hook-form',
            '@tanstack',
          ]

          const isInChunkModulesList = (module: string) =>
            chunkModulesList.some((item) => module.includes(item))

          if (isInChunkModulesList(id)) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        },
      },
    },
  },
})
