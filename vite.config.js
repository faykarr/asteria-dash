import { defineConfig } from 'vite';
import vituum from 'vituum';
import handlebars from '@vituum/vite-plugin-handlebars';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    vituum({
      pages: {
        dir: './src/pages'
      }
    }),
    handlebars({
      root: './src',
      partials: {
        directory: './src',
        extname: true
      },
      data: ['./src/data/**/*.json'],
      globals: {
        brandName: 'Asteria Dash',
        year: new Date().getFullYear()
      }
    }),
    tailwindcss()
  ],
});