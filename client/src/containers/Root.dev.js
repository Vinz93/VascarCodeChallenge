import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch,
  Redirect } from 'react-router-dom';
import DevTools from './DevTools';
import App from '../containers/App';
import Account from '../components/Account';
import Home from '../components/Home';

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);
module.exports = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/accounts/:code" component={Account}/>
          <Route component={NoMatch}/>
        </Switch>
        <DevTools />
      </div>
    </Router>
  </Provider>
);
