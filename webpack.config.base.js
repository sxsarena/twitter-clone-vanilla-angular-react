var path = require('path');
var webpack = require('webpack');

var PATHS = {
  app: path.resolve(__dirname, '../source'),
  build: path.resolve(__dirname, '../dist')
};

var plugins = [
  new webpack.NoErrorsPlugin()
];

module.exports = {
  env : process.env.NODE_ENV,
  entry: {
    app: path.resolve(PATHS.app, 'main.js')
  },
  output: {
    path: PATHS.build,
    filename: 'js/scripts.min.js',
    publicPath: '/'
  },
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        },
        include: PATHS.app
      }
    ]
  },
  plugins: plugins,
  devtool: 'eval'
};
