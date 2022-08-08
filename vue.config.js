
module.exports = {
  css: {
    extract: false, // inline css into js
    loaderOptions: {
      sass: {},
      scss: {}
    }
  },
  chainWebpack: config => {
    // config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
  }
}
