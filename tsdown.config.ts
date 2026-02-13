import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index'],
  format: ['cjs'],
  external: ['vscode'],
  exports: true,
  dts: false,
  inlineOnly: false,
  sourcemap: true,
})
