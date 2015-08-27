/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpak-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */

'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  output: {
    publicPath: 'http://localhost:8081/dist/',
    path: __dirname,
    filename: 'bundle.js'
  },

  cache: true,
  debug: true,
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8081/',
    './app/App.jsx'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    root: path.resolve('./app'),
    extensions: ["", ".jsx", ".js"]
  },

  module: {
    preLoaders: [{
      test: '\\.js$',
      exclude: 'node_modules',
      loader: 'jshint'
    }],

    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }, {
      test: /\.jsx$/,
      loaders: ['react-hot', 'babel-loader']
    }, {
      test: /\.less$/,
      loader: "style!css!less"
    }, {
      test: /\.woff($|\?)/,
      loader: "url-loader?prefix=font/&limit=5000"
    }, {
      test: /\.eot($|\?)/,
      loader: "file-loader?prefix=font/"
    }, {
      test: /\.ttf($|\?)/,
      loader: "file-loader?prefix=font/"
    }, {
      test: /\.svg($|\?)/,
      loader: "file-loader?prefix=font/"
    }]
  }
};