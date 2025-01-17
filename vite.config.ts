import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~shadcn-packaged": path.resolve(__dirname, "./~shadcn-packaged"),
    },
  },
})
