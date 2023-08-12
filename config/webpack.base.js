const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const babelOpts = {
  presets: [
    ['@babel/preset-react', { runtime: 'automatic' }],
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions']
        }
      }
    ]
  ],
  plugins: [['babel-plugin-styled-components']]
};
module.exports = (isServer = false) => ({
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]',
          emit: !isServer
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[hash][ext][query]',
          emit: !isServer
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // devMode
          //   ? 'style-loader'
          //   :
          {
            loader: MiniCssExtractPlugin.loader,
            options: { esModule: false, publicPath: './' }
          },
          {
            loader: '@teamsupercell/typings-for-css-modules-loader'
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: true }
          },
          {
            loader: 'postcss-loader',
            options: { postcssOptions: { plugins: ['autoprefixer'] } }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'babel-loader', options: babelOpts },
          { loader: 'ts-loader', options: { transpileOnly: true } }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.WatchIgnorePlugin({ paths: [/s[ac]ss\.d\.ts$/] }),
    new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '...']
  }
});
