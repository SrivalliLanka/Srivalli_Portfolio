import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Trailing slash is important so import.meta.env.BASE_URL + "path" becomes
  // "/Srivalli_Portfolio/path" instead of "/Srivalli_Portfoliopath"
  base: "/Srivalli_Portfolio/",
})

