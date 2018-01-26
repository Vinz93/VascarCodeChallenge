import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Account from './components/Account';
// import UserInfo from './components/UserInfo';
// const a = () => (<p>a</p>);
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Account} />
  </Route>
);
