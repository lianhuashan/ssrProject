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
  mode: 'development',
  entry: './src/client/views/app/Server',
  externals: [nodeExternals()],
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'build'),
    libraryTarget: 'commonjs2'
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]
};

module.exports = merge(getConfig(true), serverConfig);
