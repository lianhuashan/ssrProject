import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { StaticRouterProvider } from 'react-router-dom/server';
import routes from '../const/routes';
import Home from './Home';

const App = ({ isClient = true }: { isClient: boolean }) => {
  const router = createBrowserRouter(routes);
  // const ClientRouterProvider = <RouterProvider router={routes} />;
  // const ServerRouterProvider = <StaticRouterProvider router={routes} />;
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="stylesheet" href="/styles.css"></link> */}
        <title>My app</title>
      </head>
      <body>
        <Home />
      </body>
    </html>
  );
};

export default App;
