import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Layout from 'features/Layout';


import Home from 'features/Home';
import Trending from 'features/Trending';

import { store } from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/trending" component={Trending} />
        </Layout>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
