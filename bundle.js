const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
  },
};
