import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.js'],
  splitting: false,
  sourcemap: true,
  minify:true,
  clean: true,
  format:['cjs', 'esm'],
  external:['react']
})