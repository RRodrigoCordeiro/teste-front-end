import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/teste-front-end': {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
