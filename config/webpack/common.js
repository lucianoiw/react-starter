const path = require('path');
const Dotenv = require('dotenv-webpack');

const config = require('../');

console.log(path.resolve(config.appPath, 'src', 'components', 'common'));

module.exports = {
  entry: config.srcPath('index'),
  output: {
    filename: '[name].bundle.js',
    path: config.distPath(),
  },
  resolve: {
    modules: ['node_modules', config.srcPath()],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'styled-components': path.resolve(config.appPath, 'node_modules', 'styled-components'),
      '~': path.resolve(config.appPath),
      '@': path.resolve(config.appPath, 'src'),
      '@Common': path.resolve(config.appPath, 'src', 'components', 'Common'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/,
        loader: 'file-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new Dotenv()],
};
