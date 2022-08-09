// https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/
// vue2
// import { createVuePlugin as vue } from 'vite-plugin-vue2'
// vue3
import vue from '@vitejs/plugin-vue'

// todo: vite should support css.extract=false
// pending https://github.com/vitejs/vite/issues/4345

export default {
  plugins: [vue()],
  build: {
    emptyOutDir: false,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
}
