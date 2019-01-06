const webpack = require('webpack')

module.exports = {
  entry: {
    filename: './app.js'
  },
  output: {
    filename: './bundle.js'
  },
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
  }
}