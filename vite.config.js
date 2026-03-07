import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages serves the app from /<repo-name>/ in production.
  base: command === 'build' ? '/films_match/' : '/',
}))
