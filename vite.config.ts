// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [UnoCSS()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        me: resolve(__dirname, 'me.html'),
      },
    },
  },
})
