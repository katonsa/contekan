const path = require('path');

module.exports = {
  entry: path.resolve('./index.js'),
  output: {
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx'],
  }
}