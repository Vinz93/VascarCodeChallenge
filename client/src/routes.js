import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Counter from './components/Counter';
import OrderBook from './components/OrderBook';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={OrderBook} />
  </Route>
);
