import React from 'react';
import { renderToString, renderToPipeableStream } from 'react-dom/server';
import routes from '../../const/routes';
import { StaticRouterProvider, createStaticHandler, createStaticRouter } from 'react-router-dom/server';
import store from '../../store';
import { Provider as ReduxProvider } from 'react-redux';
import express from 'express';
let { query, dataRoutes } = createStaticHandler(routes);

export const render = async (request: express.Request, response: express.Response) => {
  let remixRequest = createFetchRequest(request);
  let context = await query(remixRequest);

  if (context instanceof Response) {
    throw context;
  }
  let router = createStaticRouter(dataRoutes, context);
  const { pipe } = renderToPipeableStream(
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="http://127.0.0.1:5001/public/main.css"></link>
        <title>My app</title>
      </head>
      <body>
        <div id="root">
          <React.StrictMode>
            <ReduxProvider store={store}>
              <StaticRouterProvider router={router} context={context} nonce="the-nonce" />
            </ReduxProvider>
          </React.StrictMode>
        </div>
      </body>
      <script src="http://127.0.0.1:5001/public/index.js"></script>
    </html>,
    {
      // bootstrapScripts: ['index.js'],
      onShellReady() {
        // response.setHeader('content-type', 'text/html');
        pipe(response);
      }
    }
  );
};

//服务端请求->客户端请求
export function createFetchRequest(req: express.Request): Request {
  let origin = `${req.protocol}://${req.get('host')}`;
  // Note: This had to take originalUrl into account for presumably vite's proxying
  let url = new URL(req.originalUrl || req.url, origin);

  let controller = new AbortController();
  req.on('close', () => {
    controller.abort();
  });

  let headers = new Headers();

  for (let [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (let value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  let init: RequestInit = {
    method: req.method,
    headers,
    signal: controller.signal
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req.body;
  }

  return new Request(url.href, init);
}

export default function serverRender({ clientStas, serverStats }: any) {
  return async (req: express.Request, res: express.Response) => render(req, res);
}
