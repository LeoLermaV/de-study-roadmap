import { existsSync, readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const certDir = 'certs'
const keyPath = `${certDir}/localhost-key.pem`
const certPath = `${certDir}/localhost.pem`
const localCerts = existsSync(keyPath) && existsSync(certPath)
  ? { key: readFileSync(keyPath), cert: readFileSync(certPath) }
  : undefined

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/de-study-roadmap/',
  server: {
    https: localCerts,
    host: true,
  },
})
