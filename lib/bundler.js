var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../config/webpack.config.js');
var path = require('path');
var fs = require('fs');

module.exports = function () {
  var bundleStart = null;
  var compiler = Webpack(webpackConfig);

  compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  var bundler = new WebpackDevServer(compiler, {
    publicPath: '/dist/',

    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    }
  });

  bundler.listen(8081, '0.0.0.0', function () {
    console.log('Bundling project, please wait...');
  });
};
