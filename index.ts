import express from 'express';
import proxy from 'express-http-proxy';
import webpack from 'webpack';
import webpackDevMid from 'webpack-dev-middleware';
import webpackHotMid from 'webpack-hot-middleware';
import webpackHotServerMid from 'webpack-hot-server-middleware';
const webpackConfig = require('./config/webpack.config');
const compiler = webpack(webpackConfig as any[]);
const clientCompiler = compiler.compilers.find((compiler) => compiler.name === 'client');
const clientConfig = webpackConfig.find((config: any) => config.name === 'client');

const app = express();

// Step 2: Attach the dev middleware to the compiler & the server
app.use(webpackDevMid(compiler, { publicPath: clientConfig.output.publicPath, serverSideRender: true, index: false }));

// Step 3: Attach the hot middleware to the compiler & the server
app.use(
  webpackHotMid(clientCompiler as any, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  })
);
app.use(webpackHotServerMid(compiler as any));

app.use(
  '/api',
  proxy('http://127.0.0.1:3001', {
    proxyReqPathResolver(req) {
      return '/api' + req.path;
    }
  })
);

app.listen(5001, () => {
  console.log('server start on 5001');
});
