var path = require('path')
var webpack = require('webpack')
var base = require('./base')
var config = module.exports = Object.assign({}, base)

const isProd = process.env.NODE_ENV === 'production'
console.log('isProd', isProd)

Object.assign(config, {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'demo.js'
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: isProd ? false : 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    isProd
      ? new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
      : { apply: () => {} }
  ]
})
