const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: process.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.css$/,  use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html'})
  ]
}