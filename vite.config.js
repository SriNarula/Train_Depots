import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 4173,
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 4173,
  },
  define: {
    'process.env': process.env,
  }
});
