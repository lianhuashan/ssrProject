import express from 'express';
import proxy from 'express-http-proxy';
import path from 'path';
import webpack from 'webpack';
import webpackDevMid from 'webpack-dev-middleware';
import webpackHotMid from 'webpack-hot-middleware';
import isObject from 'is-object';
const app = express();

import { render } from '../client/views/app/Server';
function normalizeAssets(assets: any) {
  if (isObject(assets)) {
    return Object.values(assets);
  }

  return Array.isArray(assets) ? assets : [assets];
}

function useHMR() {
  // Step 1: Create & configure a webpack compiler
  var webpackConfig = require('../../config/webpack.client');
  var compiler = webpack(webpackConfig);

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(webpackDevMid(compiler));

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(
    webpackHotMid(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000
    })
  );

  // The following middleware would not be invoked until the latest build is finished.
  // app.use(/^\/(\w+\/?)*$/, (req, res) => {
  //   console.log('webpack ssr midd', req.path);
  //   const { devMiddleware } = res.locals.webpack;
  //   const outputFileSystem = devMiddleware.outputFileSystem;
  //   const jsonWebpackStats = devMiddleware.stats.toJson();
  //   const { assetsByChunkName, outputPath } = jsonWebpackStats;
  //   console.log('--------------');
  //   console.log(JSON.stringify(assetsByChunkName.main));
  //   console.log('--------------');

  //   // Then use `assetsByChunkName` for server-side rendering
  //   // For example, if you have only one main chunk:
  //   res.send(`
  // <html>
  //   <head>
  //     <title>My App</title>
  //     <style>
  //     ${normalizeAssets(assetsByChunkName.main)
  //       .filter((path) => path.endsWith('.css'))
  //       .map((p) => outputFileSystem.readFileSync(path.join(outputPath, p)))
  //       .join('\n')}
  //     </style>
  //   </head>
  //   <body>
  //     <div id="root"></div>
  //     ${normalizeAssets(assetsByChunkName.main)
  //       .filter((path) => path.endsWith('.js'))
  //       .map((path) => `<script src="http://127.0.0.1:5001/${path}"></script>`)
  //       .join('\n')}
  //   </body>
  // </html>
  //   `);
  // });
}

// app.use(express.static('public'));

app.use(
  '/api',
  proxy('http://127.0.0.1:3001', {
    proxyReqPathResolver(req) {
      return '/api' + req.path;
    }
  })
);

useHMR();

app.get(/^\/(\w+\/?)*$/, async (req, res) => {
  console.log('get *', req.path);

  const content = await render(req);

  res.set('Content-Type', 'text/html');
  res.send(`<html>
  <head>
  <title>hello</title>
  <link rel="stylesheet" href="http://127.0.0.1:5001/public/main.css" />
  </head>
  <body>
   <div id="root">${content}</div>
  <script type="text/javascript" src="http://127.0.0.1:5001/public/index.js"></script>
  </body>
  </html>`);
});
app.listen(5001, () => {
  console.log('server start on 5001');
});
