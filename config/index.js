const path = require('path');

const appPath = path.resolve(__dirname, '../');
const filePath = (file, folder) => {
  let response = appPath;

  if (folder) response = `${response}/${folder}`;
  if (file) response = `${response}/${file}`;

  return response;
};

const isDevServer =
  path.basename(require.main.filename) === 'webpack-dev-server.js';

module.exports = {
  appPath,
  filePath: (file, folder) => filePath(file, folder),
  rootPath: file => filePath(file),
  srcPath: file => filePath(file, 'src'),
  distPath: file => filePath(file, 'dist'),
  buildPath: file => filePath(file, 'build'),
  isDevServer
};
