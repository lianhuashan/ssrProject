import React, { useState } from 'react';
import { hydrateRoot } from 'react-dom/client';
import ClientApp from './views/App';
// const App = () => {
//   const router = createBrowserRouter(routes);
//   return <RouterProvider router={router}></RouterProvider>;
// };
let root;
if (typeof document !== undefined) {
  root = hydrateRoot(document.getElementById('root')!, <ClientApp />);
}
//TODO hmr自动刷新某个模块
//todo 每个文件更新都会有dist，查看原因
if (module?.hot) {
  module?.hot?.accept('./views/App', async () => {
    const NextApp = require('./views/app').default;
    hydrateRoot(document.getElementById('root')!, <NextApp />);
  });
}

// const root = createRoot(document.getElementById('root')!);
// root.render(<ClientApp />);
