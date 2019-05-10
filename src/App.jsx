import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';

import Router from './router';
import Store from './redux-flow/index.store';
import { theme, GlobalStyle } from './styles';

const App = () => (
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        {Router()}
        <GlobalStyle />
      </HashRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
