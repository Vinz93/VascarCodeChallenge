import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import UserInfo from './components/UserInfo';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={UserInfo} />
  </Route>
);
