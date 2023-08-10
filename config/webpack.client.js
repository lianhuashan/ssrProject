const path = require('path');
const { merge } = require('webpack-merge');
const getConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

/**
 * @type {import('webpack').Configuration}
 */

const clientConfig = {
  mode: 'development',
  entry: [hotMiddlewareScript, './src/client/index.tsx'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '..', 'public'),
    publicPath: 'http://localhost:5001/public/'
  },
  devtool: 'source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()]

  // devServer: {
  //   historyApiFallback: true,
  //   static: { directory: path.resolve(__dirname, '..', 'public') },
  //   hot: true,
  //   host: '0.0.0.0',
  //   port: 5000,
  //   client: {
  //     logging: 'info'
  //   },

  //   onListening: function (devServer) {
  //     if (!devServer) {
  //       throw new Error('webpack-dev-server is not defined');
  //     }

  //     const port = devServer.server.address().port;
  //     console.log('Listening on port:', port);
  //   }
  // },
  // plugins: [new HtmlWebpackPlugin({ title: 'ssr project', template: path.resolve(__dirname, '..', 'template.html') })]
};

module.exports = merge(getConfig(), clientConfig);
