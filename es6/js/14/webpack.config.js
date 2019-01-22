const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './app.js'
  },
  output: {
    filename: './bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
           }
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
      test: /\.js(\?.*)?$/i,
      extractComments: true,
      uglifyOptions: {
        compress: true, 
        mangle: true,
        output: {
          comments: false
        }
      }
    })
  ]
}
