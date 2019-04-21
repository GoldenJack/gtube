import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from 'features/Home';
import Trending from 'features/Trending';
import Watch from 'features/Watch';
import Channel from 'features/Channel';
import Liked from 'features/Liked';
import Subscriptions from 'features/Subscriptions';
// TODO: rename SearchPage to Searching
import SearchPage from 'features/SearchPage';


export const Routes = () => (
  <Fragment>
    <Route exact path="/" component={Home} />
    {/* <Route path="/trending" component={Trending} />
    <Route path="/search" component={SearchPage} />
    <Route path="/liked" component={Liked} />
    <Route path="/subscriptions" component={Subscriptions} />
    <Route path="/watch/:videoId" component={Watch} />
    <Route path="/channel/:channelId" component={Channel} /> */}
  </Fragment>
);
