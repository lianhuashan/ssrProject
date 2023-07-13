import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from '../const/routes';
import Home from './Home';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';

const router = createBrowserRouter(routes);
const App = () => (
  <ReduxProvider store={store}>
    <RouterProvider router={router} />
  </ReduxProvider>
);
export default App;
