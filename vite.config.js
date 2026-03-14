import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        omnie: resolve(__dirname, 'o-mnie.html'),
        oferta: resolve(__dirname, 'oferta.html'),
        cennik: resolve(__dirname, 'cennik.html'),
        szkolenia: resolve(__dirname, 'szkolenia.html'),
        umowwizyte: resolve(__dirname, 'umow-wizyte.html'),
      },
    },
  },
})
