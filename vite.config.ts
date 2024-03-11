import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/checkout-demo-client",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        404: "public/404.html",
      },
    },
  },
})
