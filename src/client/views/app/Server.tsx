import React from 'react';
import { renderToString } from 'react-dom/server';
import routes from '../../const/routes';
import { StaticRouterProvider, createStaticHandler, createStaticRouter } from 'react-router-dom/server';
import store from '../../store';
import { Provider as ReduxProvider } from 'react-redux';
import express from 'express';
import type { Request, Response } from 'express';
let { query, dataRoutes } = createStaticHandler(routes);

export const render = async (request: express.Request) => {
  let remixRequest = createFetchRequest(request);
  let context = await query(remixRequest);

  if (context instanceof Response) {
    throw context;
  }

  let router = createStaticRouter(dataRoutes, context);
  let htmlStr, styleTags;
  try {
    htmlStr = renderToString(
      <React.StrictMode>
        <ReduxProvider store={store}>
          <StaticRouterProvider router={router} context={context} nonce="the-nonce" />
        </ReduxProvider>
      </React.StrictMode>
    );
  } catch (e) {
    throw e;
  }
  return htmlStr;
};

export function createFetchRequest(req: express.Request): Request {
  let origin = `${req.protocol}://${req.get('host')}`;
  // let origin = ;
  let port = '3001';
  // Note: This had to take originalUrl into account for presumably vite's proxying
  let url = new URL(req.originalUrl || req.url, origin);

  let controller = new AbortController();
  req.on('close', () => controller.abort());

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
  return (req: Request, res: Response) => {
    res.send(render(req));
  };
}
