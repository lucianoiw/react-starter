const path = require('path');
const merge = require('webpack-merge');

const common = require('./common.js');

module.exports = merge(common, {
  mode: 'development',
  stats: 'normal',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../../dist'),
    historyApiFallback: true,
    compress: true,
    port: 3000,
    disableHostCheck: true,
    public: 'localhost:3000',
  },
});
