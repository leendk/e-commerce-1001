import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT || 5000),
    strictPort: process.env.RUN_BY_WORKFLOW === '1',
    hmr: process.env.RUN_BY_WORKFLOW === '1' ? {
      port: Number(process.env.PORT || 5000),
    } : undefined,
    allowedHosts: true
  }
})
