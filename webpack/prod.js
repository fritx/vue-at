const TerserPlugin = require("terser-webpack-plugin");
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
  devtool: 'source-map',
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
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: true,
          sourceMap: true
        }
      }),
    ]
  }
})
