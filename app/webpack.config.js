const path = require('path');
const webpack = require('webpack');
const config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'www'),
    compress: true,
    port: 9001
  },
  devtool: 'inline-source-map'
};

module.exports = config;