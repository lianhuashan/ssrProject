import type { Request, RequestHandler, Response } from 'express';
import type { Stats } from 'webpack';
import { MiddlewareRenderer } from './types';
import { render } from './renderRequest';

export const requestHandler = async (req: Request, res: Response, clientStats: Stats) => {
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
};
export default function middlewareRenderer({ clientStats, serverStats }: MiddlewareRenderer): RequestHandler {
  return (req: Request, res: Response) => requestHandler(req, res, clientStats);
}
