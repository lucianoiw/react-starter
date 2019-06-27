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
      '@App': path.resolve(config.appPath),
      '@Src': path.resolve(config.appPath, 'src'),
      '@Ducks': path.resolve(config.appPath, 'src', 'redux-flow', 'ducks'),
      '@Pages': path.resolve(config.appPath, 'src', 'pages'),
      '@Assets': path.resolve(config.appPath, 'src', 'assets'),
      '@Components': path.resolve(config.appPath, 'src', 'components'),
      '@Containers': path.resolve(config.appPath, 'src', 'containers'),
      '@Common': path.resolve(config.appPath, 'src', 'components', 'Common'),
      '@Utils': path.resolve(config.appPath, 'src', 'utils'),
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
