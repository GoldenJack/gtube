import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Standart from 'features/Layouts/Standart';

import Home from 'features/Home';
import Trending from 'features/Trending';
import Video from 'features/Video';
import Channel from 'features/Channel';
import Liked from 'features/Liked';
import Subscriptions from 'features/Subscriptions';
import SearchPage from 'features/SearchPage';

import { store } from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Standart>
          <Route exact path="/" component={Home} />
          <Route path="/trending" component={Trending} />
          <Route path="/search" component={SearchPage} />
          <Route path="/liked" component={Liked} />
          <Route path="/subscriptions" component={Subscriptions} />
          <Route path="/watch/:videoId" component={Video} />
          <Route path="/channel/:channelId" component={Channel} />
        </Standart>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
