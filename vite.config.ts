import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '.env') })
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: parseInt(process.env.VITE_PORT || "3000"),
    host: "0.0.0.0" //process.env.VITE_HOST || "localhost",
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
  },
  preview: {
    allowedHosts: [
      process.env.VITE_HK_HOST_1,
      process.env.VITE_HK_HOST_2,
      process.env.VITE_HK_HOST_3,
    ].filter(Boolean) as string[],
  },
  publicDir: path.resolve(__dirname, 'public'),
})