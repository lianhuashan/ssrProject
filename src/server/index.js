const express = require('express');
const proxy = require('express-http-proxy');
const bodyParser = require('body-parser');
const app = express();

import { render } from '../client/views/app/Server';

app.use(express.static('public'));

app.use(
  '/api',
  proxy('http://127.0.0.1:3001', {
    proxyReqPathResolver(req) {
      return '/api' + req.path;
    }
  })
);

console.log(process.env);
(function () {
  // Step 1: Create & configure a webpack compiler
  var webpack = require('webpack');
  var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : '../../config/webpack.client');
  var compiler = webpack(webpackConfig);

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath
    })
  );

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(
    require('webpack-hot-middleware')(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000
    })
  );
})();

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
