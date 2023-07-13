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
  ]
};
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: 'source-map-loader' }, { loader: 'babel-loader', options: babelOpts }],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [{ loader: 'babel-loader', options: babelOpts }, 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
