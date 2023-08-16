import React, { useState } from 'react';
import { hydrateRoot } from 'react-dom/client';
import ClientApp from './views/App';
let root: any;
if (module?.hot) {
  // console.log('update>>>>before');
  module.hot.accept('./views/App.tsx', () => {
    const NextApp = require('./views/App').default;
    hydrateRoot(document.getElementById('root')!, <NextApp />);
  });
}
if (typeof document !== undefined) {
  root = hydrateRoot(document.getElementById('root')!, <ClientApp />);
}
