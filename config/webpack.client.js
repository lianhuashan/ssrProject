const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
/**
 * @type {import('webpack').Configuration}
 */
const clientConfig = {
  mode: 'development',
  entry: './src/client/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '..', 'public')
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  }
  // devServer: { static: {} }

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

module.exports = merge(config, clientConfig);
