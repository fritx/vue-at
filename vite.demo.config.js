import { defineConfig } from 'vite'

// https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/
// vue2
// import { createVuePlugin as vue } from 'vite-plugin-vue2'
// vue3
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
