var path = require('path')
var webpack = require('webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax',
        ]
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: [
          /node_modules/,
          path.resolve(__dirname, '../dist'),
          path.resolve(__dirname, '../package'),
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ttf|woff)$/,
        use: ['url-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' webpack
      // https://vuejs.org/v2/guide/installation.html#Standalone-vs-Runtime-only-Build
      // 'vue$': 'vue/dist/vue.common.js'
    }
  }
}
