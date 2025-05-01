import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tainwindcss from "@tailwindcss/vite"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tainwindcss()
  ],
})
