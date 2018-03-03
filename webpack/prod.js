var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var path = require('path')
var webpack = require('webpack')
var base = require('./base')
var config = module.exports = Object.assign({}, base)

Object.assign(config, {
  entry: {
    'vue-at': './src/At.vue',
    'vue-at-textarea': './src/AtTextarea.vue'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.ExternalsPlugin('commonjs2', [
      'vue',
      'textarea-caret'
    ]),
    // todo: upgrade webpack to 3.x
    // switched to uglifyjs-webpack-plugin
    // https://github.com/vuejs-templates/webpack/blob/cd4d7d957c9af3d37092c79bf490b56b8d88b108/template/build/webpack.prod.conf.js#L37
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: true,
      parallel: true
    })
    // http://vue-loader.vuejs.org/en/workflow/production.html
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
})
