const path = require('path');
const { merge } = require('webpack-merge');
const getConfig = require('./webpack.base.cjs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000';

/**
 * @type {import('webpack').Configuration}
 */

const clientConfig = {
  mode: 'development',
  entry: [hotMiddlewareScript, './src/client/index.tsx'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '..', 'public'),
    publicPath: '/public/'
  },
  devtool: 'source-map',
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]
};

module.exports = merge(getConfig(), clientConfig);
