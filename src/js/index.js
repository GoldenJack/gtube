import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch } from 'react-router-dom';
import Layout from 'features/Layout';
import { Routes } from './routes';

import { store } from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Layout>
          <Routes />
        </Layout>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
