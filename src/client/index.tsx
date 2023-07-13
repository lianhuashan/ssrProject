import React, { useState } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import ClientApp from './views/ClientApp';

// const App = () => {
//   const router = createBrowserRouter(routes);
//   return <RouterProvider router={router}></RouterProvider>;
// };

// const root = hydrateRoot(document, <App />);
const root = createRoot(document.getElementById('root')!);
root.render(<ClientApp />);
