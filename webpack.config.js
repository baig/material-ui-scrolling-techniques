var path = require('path');
var webpack = require('webpack');

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src', 'index'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: {
      'material-ui-scrolling-techniques': path.join(__dirname, '..', 'src')
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loader: 'style!css',
    }]
  }
};
