import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './containers/App';
import Account from './components/Account';
export default (
  <Route path="/" component={App}>
    <Route component={Account} />
    <Route path="/account/detail" render={() => (<p>account detail</p>)}/>
  </Route>
);
