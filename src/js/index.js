import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Layout from 'features/Layout';


import Home from 'features/Home';
import Trending from 'features/Trending';
import Video from 'features/Video';

import Liked from 'features/Liked';
import Subscriptions from 'features/Subscriptions';

import SearchPage from 'features/SearchPage';

import { store } from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/trending" component={Trending} />
          <Route path="/search" component={SearchPage} />

          <Route path="/liked" component={Liked} />
          <Route path="/subscriptions" component={Subscriptions} />

          <Route path="/watch/:videoId" component={Video} />
        </Layout>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
