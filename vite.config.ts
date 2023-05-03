import vitePluginDTS from 'vite-plugin-dts';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['cjs', 'es', 'umd'],
      name: 'VueFilterNumericFormat'
    }
  },
  plugins: [
    vitePluginDTS({
      insertTypesEntry: true
    })
  ]
});
