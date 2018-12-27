import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Default from 'templates/Default';
import Home from 'features/Home';

import { store } from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Default>
          <Route exact path="/" component={Home} />
        </Default>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
