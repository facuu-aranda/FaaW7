import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

const componentFiles = globSync('src/components/*.ts', {
  ignore: ['**/*.test.ts', '**/*.stories.ts', '**/*.css.ts'],
});

const componentEntries = componentFiles.map((file) => {
  const normalizedFile = file.replace(/\\/g, '/');
  
  const entryName = normalizedFile
    .replace('src/', '') 
    .slice(0, -3); 
    
  return [entryName, resolve(__dirname, file)];
});

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        ...Object.fromEntries(componentEntries),
      },
      name: 'FaaW7Components',
      fileName: (format, entryName) => {
        if (entryName === 'index') {
          return `faaw7-components.${format}.js`;
        }
        return `${entryName}.${format}.js`;
      },
    },
    rollupOptions: {
      external: [/^lit/],
      output: {
        globals: {
          lit: 'lit',
        },
      },
    },
  },
});