const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const getConfig = require('./webpack.base.cjs');
const webpack = require('webpack');
/**
 * @type {import('webpack').Configuration}
 */

const serverConfig = {
  target: 'node',
  mode: 'production',
  entry: './src/server/index.mts',
  // externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../', 'build')
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin()]
};

module.exports = merge(getConfig(true), serverConfig);
