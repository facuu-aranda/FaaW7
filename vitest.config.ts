import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
import { playwright } from '@vitest/browser-playwright' 

export default defineConfig({
  test: {
    globals: true,
    browser: {
      enabled: true,
      provider: playwright(), 
      instances: [
        { browser: 'chromium' }
      ],
    },
    coverage: {
      provider: 'v8', 
      reporter: ['text', 'html'],
      exclude: [
        'src/stories/**',
        'src/theme/**',
        '**/*.css.ts',
        '**/*.stories.ts',
        'src/index.css',
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})