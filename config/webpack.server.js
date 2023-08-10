const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const getConfig = require('./webpack.base');
/**
 * @type {import('webpack').Configuration}
 */

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index',
  externals: [nodeExternals()],
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'build'),
    publicPath: 'http://localhost:5001/public'
  }
};

module.exports = merge(getConfig(true), serverConfig);
