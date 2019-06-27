import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from '@Components/Loading';

import Router from '@Src/router';
import Store from '@Src/redux-flow/index.store';
import { theme, GlobalStyle } from '@Assets/styles';

const Navbar = Loadable({ loader: () => import('@Containers/Navbar'), loading: Loading });

const App = () => (
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Navbar />
        <HashRouter>
          {Router()}
          <GlobalStyle />
        </HashRouter>
      </HashRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
