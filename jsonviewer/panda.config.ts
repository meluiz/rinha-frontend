import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  exclude: [],
  preflight: true,
  outdir: 'pandacss',
  jsxFramework: 'react',
  presets: ['@pandacss/preset-base'],
  include: ['./src/**/*.{ts,tsx}'],
})
