import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps the built site portable (works at a domain root or a subpath)
export default defineConfig({
  base: './',
  plugins: [react()],
});
