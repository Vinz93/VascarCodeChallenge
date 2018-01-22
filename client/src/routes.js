import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Counter from './components/Counter';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Counter} />
  </Route>
);
