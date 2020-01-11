const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

// assign mode to config
Object.assign(webpackConfig, {mode: 'development'});
const compiler = webpack(webpackConfig);

const watching = compiler.watch({
  aggregateTimeout: 300,
  poll: undefined
}, (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    console.log(stats.hash);
  }
});