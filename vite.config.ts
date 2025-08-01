import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

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
    allowedHosts: ["sialimdi.page"],
    https: {
      key: path.resolve(__dirname, 'certs', 'server.key'),
      cert: path.resolve(__dirname, 'certs', 'fullchain.crt'),
    },
  },
  publicDir: path.resolve(__dirname, 'public'),
})