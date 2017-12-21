var webpack = require('webpack');
var config = require('./webpack.config.base');

config.entry.unshift('webpack-hot-middleware/client');

config.devServer = {
  hot: true,
  inline: true
};

config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

module.exports = config;
