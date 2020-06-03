const path = require('path');
const webpack = require('webpack');
let configJson = require('./app/config/config.json');
const config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'www'),
    compress: true,
    port: configJson.port,
    host:configJson.ip
  },
  devtool: 'inline-source-map'
};

module.exports = config;