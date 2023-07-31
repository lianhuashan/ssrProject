const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

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
module.exports = {
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
          MiniCssExtractPlugin.loader,
          {
            loader: '@teamsupercell/typings-for-css-modules-loader'
          },
          { loader: 'css-loader', options: { importLoaders: 2, modules: true } },

          { loader: 'postcss-loader', options: { postcssOptions: { plugins: ['autoprefixer'] } } },
          'sass-loader'
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
  plugins: [new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' })],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '...']
  }
};
