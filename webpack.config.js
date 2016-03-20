var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      'angular',
      './app/main',
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'app') },
      { test: /\.html$/, loader: 'html' },
    ],
  },
};
