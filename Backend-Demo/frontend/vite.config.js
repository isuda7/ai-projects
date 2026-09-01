import { defineConfig } from 'vite'
import { resolve } from 'path'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [cloudflare()],
  build: {}
})