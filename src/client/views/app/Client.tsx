import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from '../../const/routes';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../../store';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
`;

const App = () => {
  const preLoadedState = (window as any)?.__PRE_LOAD_STATE__;
  const router = createBrowserRouter(routes);

  return (
    <React.StrictMode>
      <GlobalStyle />
      <ReduxProvider store={store} serverState={preLoadedState}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </React.StrictMode>
  );
};
export default App;
