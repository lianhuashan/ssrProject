const express = require('express');
const { renderToString, renderToPipeableStream } = require('react-dom/server');
const app = express();
import { render } from '../client/views/app/Server';
//todo 直接路由到服务器根目录怎么实现
app.use(express.static('public'));
// const content = renderToString(<Home />);
// app.get('*', function (req, res) {
//   res.set('content-type', 'text/html');
//   res.sendFile('index.html');
// });

app.get('*', async (req, res) => {
  // const { pipe } = renderToPipeableStream(<ServerApp request={req} />, {
  //   bootstrapScripts: ['./static/index.js'],
  //   onShellReady: function () {
  //     res.set('Content-Type', 'text/html');
  //     pipe(res);
  //   },
  //   onShellError: function () {
  //     res.sendStatus(500);
  //   }
  // });
  // console.log('req /', req.path);
  const content = await render(req);
  console.log('====================================');
  console.log(content);
  console.log('====================================');
  // // res.send('hello');
  res.set('Content-Type', 'text/html');
  res.send(`<html>
  <head>
  <title>hello</title>
  </head>
  <body>
  <h1>hello</h1>
  <p>word</p>
   <div id="root">${content}</div>
  <script type="text/javascript" src="index.js"></script>
  </body>
  </html>`);
});
app.listen(5000, () => {
  console.log('server start on 5000');
});
