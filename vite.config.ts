// import { fileURLToPath, URL } from 'node:url';
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//     },
//   },
//   server: {
//     proxy: {
//       '/teste-front-end': {
//         target: 'https://app.econverse.com.br',
//         changeOrigin: true,
//         secure: true,
//       },
//     },
//   },
// });

import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const apiProxy = {
  '/teste-front-end': {
    target: 'https://app.econverse.com.br',
    changeOrigin: true,
    secure: true,
  },
};

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: apiProxy,
  },
  preview: {
    proxy: apiProxy,
  },
});