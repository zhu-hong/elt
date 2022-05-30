import { defineConfig } from 'rollup'
import PostCSS from 'rollup-plugin-postcss'

export default defineConfig({
  input: './index.js',
  output: {
    format: 'esm',
    file: 'dist/lib.js',
  },
  plugins: [
    PostCSS({
      extract: 'style.css',
    }),
  ],
})
