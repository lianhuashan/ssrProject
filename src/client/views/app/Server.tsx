import React from 'react';
import { renderToString } from 'react-dom/server';
import routes from '../../const/routes';
import { StaticRouterProvider, createStaticHandler, createStaticRouter } from 'react-router-dom/server';
import store from '../../store';
import { Provider as ReduxProvider } from 'react-redux';
import express from 'express';
import { GlobalStyle } from './Client';
import { ServerStyleSheet } from 'styled-components';
let { query, dataRoutes } = createStaticHandler(routes);

export const render = async (request: express.Request) => {
  let remixRequest = createFetchRequest(request);
  let context = await query(remixRequest);
  // try {
  //   remixRequest = createFetchRequest(request);
  //   context = await query(remixRequest);
  // } catch (e) {
  //   console.log('query is error');
  //   console.log(e.message);
  // }

  if (context instanceof Response) {
    throw context;
  }

  let router = createStaticRouter(dataRoutes, context);
  let sheet, htmlStr, styleTags;
  try {
    sheet = new ServerStyleSheet();
    htmlStr = renderToString(
      sheet.collectStyles(
        <React.StrictMode>
          <GlobalStyle />
          <ReduxProvider store={store}>
            <StaticRouterProvider router={router} context={context} nonce="the-nonce" />
          </ReduxProvider>
        </React.StrictMode>
      )
    );
    styleTags = sheet.getStyleTags();
  } catch (e) {
    styleTags = [];
  } finally {
    sheet?.seal();
  }
  return [htmlStr, styleTags];
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
