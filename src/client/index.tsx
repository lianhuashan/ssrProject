import React, { useState } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import ClientApp from './views/app/Client';

// const App = () => {
//   const router = createBrowserRouter(routes);
//   return <RouterProvider router={router}></RouterProvider>;
// };
if (typeof document !== undefined) {
  const root = hydrateRoot(document.getElementById('root')!, <ClientApp />);
}

if (module?.hot) {
  module?.hot?.accept();
}

// const root = createRoot(document.getElementById('root')!);
// root.render(<ClientApp />);
