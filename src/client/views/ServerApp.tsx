import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home';
import { RouterProvider } from 'react-router-dom';
import routes from '../const/routes';
import { StaticRouterProvider, createStaticRouter } from 'react-router-dom/server';

// const router = createStaticRouter(routes,{});
// const App = () => <StaticRouterProvider router={router} />;
// export default App;
