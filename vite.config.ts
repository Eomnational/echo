import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: './testSetup.js',
    exclude: [...configDefaults.exclude, 'dist/**', 'node_modules/**'],
  },

})

