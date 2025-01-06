import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      exclude: [
        '**/types/**',
        '**/__tests__/**',
        'node_modules/**',
        'dist/**',
        '**/*.d.ts',
        '**.test.tsx',
        '.eslintrc.js',
        'eslint.config.js',
        'vite.config.ts',
        'vitest.config.ts',
      ],
    },
  },
})
