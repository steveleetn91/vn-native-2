const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'www'),
    compress: true,
    port: 9000
  },
  
};

module.exports = config;