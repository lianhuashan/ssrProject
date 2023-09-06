const path = require('path');
const { merge } = require('webpack-merge');
const getConfig = require('./webpack.base.cjs');
const webpack = require('webpack');

/**
 * @type {import('webpack').Configuration}
 */

const clientConfig = {
  mode: 'production',
  entry: ['./src/client/index.tsx'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../../', 'public'),
    publicPath: '/public/'
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin()]
};

module.exports = merge(getConfig(), clientConfig);
