import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from 'context';
import { HashRouter, Switch } from 'react-router-dom';
import { Layout } from 'features';
import { Routes } from './routes';

import { store } from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <AuthProvider>
          <Layout>
            <Routes />
          </Layout>
        </AuthProvider>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
