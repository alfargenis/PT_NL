import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://alfargenis.github.io/PT_NL/',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Servidor Node.js
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
