import { defineConfig } from '@pandacss/dev'

import { globalCss, patterns, staticCss, theme } from '@lib/pandacss'

export default defineConfig({
  theme,
  patterns,
  globalCss,
  staticCss,
  exclude: [],
  preflight: true,
  outdir: 'pandacss',
  jsxFramework: 'react',
  include: ['./src/**/*.{ts,tsx}'],
  presets: ['@pandacss/preset-base', '@park-ui/presets'],
})
