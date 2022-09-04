import { defineConfig } from 'vite'
import { resolve } from 'path'
import { merge } from 'lodash'

// https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/
// vue3
// import vue from '@vitejs/plugin-vue'
// vue2
import { createVuePlugin as vue } from 'vite-plugin-vue2'

let options = {
  plugins: [vue()],
  resolve: {
    alias: {
      // fix: vuetify [Bug Report] "$attrs is readonly" and "$listeners is readonly" console messages. #4068
      // found in ---> <VTextarea>
      // Vite/Rollup solution
      // https://github.com/vuetifyjs/vuetify/discussions/4068#discussioncomment-1357093
      vue: resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js'),

      // opt.1 developing src
      'vue-at/dist/vue-at-textarea': resolve(__dirname, 'src/AtTextarea.vue'),
      'vue-at': resolve(__dirname, 'src/At.vue'),

      // opt.2 testing dist
      // 'vue-at/dist/vue-at-textarea': resolve(__dirname, 'dist/vue-at-textarea'),
      // 'vue-at': resolve(__dirname, 'dist/vue-at.js'),

      // opt.3 testing npm_pack
      // 'vue-at/dist/vue-at-textarea': resolve(__dirname, 'package/dist/vue-at-textarea'),
      // 'vue-at': resolve(__dirname, 'package') + '/', // trailing slash is required here
    },
  },
  build: {
    outDir: resolve(__dirname, 'dist_demo')
  }
}

if (process.env.LOCAL_TESTING) {
  merge(options, {
    // Cannot read property 'isCE' of null in remote component with slot using Module Federation #4344
    // https://github.com/vuejs/core/issues/4344#issuecomment-1023220225
    resolve: {
      dedupe: ['vue'],
    },

    // Vite - Dependency Pre-Bundling
    // Monorepos and Linked Dependencies
    // https://vitejs.dev/guide/dep-pre-bundling.html#monorepos-and-linked-dependencies
    optimizeDeps: {
      include: ['vue-at', 'vue-at/dist/vue-at-textarea']
    },
    build: {
      commonjsOptions: {
        include: [/vue-at/, /node_modules/]
      }
    }
  })
}

// https://vitejs.dev/config/
export default defineConfig(options)
