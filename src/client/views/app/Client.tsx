import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from '../../const/routes';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../../store';

const App = () => {
  const preLoadedState = (window as any)?.__PRE_LOAD_STATE__;
  const router = createBrowserRouter(routes);

  return (
    <React.StrictMode>
      <ReduxProvider store={store} serverState={preLoadedState}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </React.StrictMode>
  );
};
export default App;
