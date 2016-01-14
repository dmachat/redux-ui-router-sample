var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'angular',
      './app/main',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: './build',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: path.resolve('app') },
      { test: /\.html$/, loader: 'html' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('app', 'index.html'),
      inject: 'body',
    }),
  ],
};
