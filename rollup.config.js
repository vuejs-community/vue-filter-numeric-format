import rollupPluginJson from '@rollup/plugin-json';
import rollupPluginTypeScript from '@wessberg/rollup-plugin-ts';

export default {
  input: './src/vue-filter-numeric-format.ts',
  output: [
    {
      exports: 'named',
      file: 'dist/vue-filter-numeric-format.esm.js',
      format: 'es',
      sourcemap: true
    },
    {
      exports: 'named',
      file: 'dist/vue-filter-numeric-format.cjs.js',
      format: 'commonjs',
      sourcemap: true
    },
    {
      exports: 'named',
      file: 'dist/vue-filter-numeric-format.umd.js',
      format: 'umd',
      name: 'VueFilterDateFormat',
      sourcemap: true
    }
  ],
  plugins: [
    rollupPluginJson(),
    rollupPluginTypeScript()
  ]
};
