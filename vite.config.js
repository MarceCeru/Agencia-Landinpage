import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 // base:'https://marceceru.github.io/Agency-Landing-Page',
  base: 'https://marceceru.gitlab.io/Agency-Landin-page',
})
