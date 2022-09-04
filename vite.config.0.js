import ViteSingleCssPlugin from './build/ViteSingleCssPlugin'

// https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/
// vue3
// import vue from '@vitejs/plugin-vue'
// vue2
import { createVuePlugin as vue } from 'vite-plugin-vue2'

export default {
  plugins: [
    vue(),
    // supports vite css.extract=false.
    // credits: @ruofee
    // https://github.com/vitejs/vite/issues/4345#issuecomment-1073734133
    // https://github.com/ruofee/vue-dynamic-form-component/blob/vite/build/ViteSingleCssPlugin.js
    ViteSingleCssPlugin()
  ],
  build: {
    emptyOutDir: false,
    sourcemap: true,
    target: 'es2015',
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
