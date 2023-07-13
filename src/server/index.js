const express = require('express');
const { renderToString, renderToPipeableStream } = require('react-dom/server');
const app = express();
import Home from '../client/views/Home';
//todo 直接路由到服务器根目录怎么实现
app.use(express.static('public'));
const content = renderToString(<Home />);
app.get('*', function (req, res) {
  res.set('content-type', 'text/html');
  res.sendFile('index.html');
});

// app.get('/', (req, res) => {
//   const { pipe } = renderToPipeableStream(<Home />, {
//     bootstrapScripts: ['./static/index.js'],
//     onShellReady: function () {
//       res.set('Content-Type', 'text/html');
//       pipe(res);
//     },
//     onShellError: function () {
//       res.sendStatus(500);
//     }
//   });
//   console.log('req /', req.path);
//   console.log(content);
//   // res.send('hello');
//   res.set('Content-Type', 'text/html');
//   res.send(`<html>
//   <head>
//   <title>hello</title>
//   </head>
//   <body>
//   <h1>hello</h1>
//   <p>word</p>
//    <div id="root">${content}</div>
//   <script type="text/javascript" src="./static/index.js"></script>
//   </body>
//   </html>`);
// });
app.listen(5000, () => {
  console.log('server start on 5000');
});
