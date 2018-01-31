import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-flexbox-grid';
import openSocket from 'socket.io-client';
import { Link } from 'react-router-dom';

import { updateAccounts } from '../actions';
const URL = 'http://localhost:3335';

const Menu = ({ accounts }) => {
  return (
    <ul className="accounts-list">
      {
        accounts.allIds.map(id => {
          const { name, id: code, pnl } = accounts.byId[id];
          return (
            <li className="account-item"key={code}>
              <Link key={code} to={`/accounts/${code}`}>{name}</Link>
              <p key={code + 1 }>{pnl}</p>
            </li>
          );
        })
      }
    </ul>
  );
};

class Home extends Component {
  componentWillMount() {
    const socket = openSocket(URL);
    socket.on('update', accounts => {
      this.props.updateAccounts(accounts);
    });
  }
  render() {
    return (
        <Grid fluid>
          <Menu accounts={this.props.accounts} />
        </Grid>
    );
  }
}
Home.propTypes = {
  updateAccounts: PropTypes.func.isRequired,
  accounts: PropTypes.object,
};
const mapStateToProps = ({ accounts }) => ({
  accounts,
});
export default connect(mapStateToProps, { updateAccounts })(Home);
