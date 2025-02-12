import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import alias from './alias'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias,
  },
})
