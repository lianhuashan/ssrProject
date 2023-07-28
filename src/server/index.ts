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
  app.use(
    webpackDevMid(compiler, {
      publicPath: webpackConfig.output.publicPath,
      serverSideRender: true,
      writeToDisk: false,
      // index: '',
      mimeTypeDefault: 'text/html'
    })
  );

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(
    webpackHotMid(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 100
    })
  );

  // The following middleware would not be invoked until the latest build is finished.
  //   app.use((req, res) => {
  //     const { devMiddleware } = res.locals.webpack;
  //     const outputFileSystem = devMiddleware.outputFileSystem;
  //     const jsonWebpackStats = devMiddleware.stats.toJson();
  //     const { assetsByChunkName, outputPath } = jsonWebpackStats;
  //     console.log('--------------');
  //     console.log(JSON.stringify(assetsByChunkName.main));
  //     console.log('--------------');

  //     // Then use `assetsByChunkName` for server-side rendering
  //     // For example, if you have only one main chunk:
  //     res.send(`
  // <html>
  //   <head>
  //     <title>My App</title>
  //     <style>
  //     ${normalizeAssets(assetsByChunkName.main)
  //       .filter((path) => path.endsWith('.css'))
  //       .map((path) => outputFileSystem.readFileSync(path.join(outputPath, path)))
  //       .join('\n')}
  //     </style>
  //   </head>
  //   <body>
  //     <div id="root"></div>
  //     ${normalizeAssets(assetsByChunkName.main)
  //       .filter((path) => path.endsWith('.js'))
  //       .map((path) => `<script src="${path}"></script>`)
  //       .join('\n')}
  //   </body>
  // </html>
  //   `);
  //   });
}

app.use(express.static('public'));

app.use(
  '/api',
  proxy('http://127.0.0.1:3001', {
    proxyReqPathResolver(req) {
      return '/api' + req.path;
    }
  })
);

useHMR();

app.get('*', async (req, res) => {
  const [content, styleTags] = await render(req);
  res.set('Content-Type', 'text/html');
  res.send(`<html>
  <head>
  <title>hello</title>
  ${styleTags}
  </head>
  <body>
   <div id="root">${content}</div>
  <script type="text/javascript" src="index.js"></script>
  </body>
  </html>`);
});
app.listen(5000, () => {
  console.log('server start on 5000');
});
