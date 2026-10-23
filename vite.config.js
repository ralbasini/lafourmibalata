import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  root: 'src',
  // GitHub Pages project URL; switch to '/' once lafourmibalata.ch points to the site
  base: command === 'build' ? '/lafourmibalata/' : '/',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
}))
