import { StaticRouterProvider, createStaticHandler, createStaticRouter } from 'react-router-dom/server';
import store from './store';
import { Provider as ReduxProvider } from 'react-redux';
import type { Request } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

let routes = require('./const/routes').default;
if (module.hot) {
  module.hot.accept('./const/routes.tsx', () => {
    routes = require('./const/routes').default;
  });
}

export const render = async (request: Request) => {
  let { query, dataRoutes } = createStaticHandler(routes);
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
  } finally {
  }
  return htmlStr;
};

function createFetchRequest(req: Request): Request {
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
