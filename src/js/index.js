import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AuthProvider, PlayerProvider } from 'context';
import { HashRouter, Switch } from 'react-router-dom';
import { Layout } from 'features';
import { Routes } from './routes';

import { store } from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <AuthProvider>
          <PlayerProvider>
            <Layout>
              <Routes />
            </Layout>
          </PlayerProvider>
        </AuthProvider>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
