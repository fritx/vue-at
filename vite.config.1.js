import { defineConfig } from 'vite'
import { resolve } from 'path'
import commonConfig from './vite.config.0'

export default defineConfig({
  ...commonConfig,
  build: {
    ...commonConfig.build,
    lib: {
      entry: resolve(__dirname, 'src/At.vue'),
      name: 'At',
      fileName: 'vue-at',
      formats: ['cjs', 'umd']
    }
  }
})
