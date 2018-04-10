import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-flexbox-grid';
import openSocket from 'socket.io-client';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import TradingInfo from './TradingInfo';
import DeltaChart from '../containers/DeltaChart';
import { updateAccounts, updateAccount } from '../actions';

const URL = 'http://localhost:3335';

class Account extends Component {
  componentWillMount() {
    const socket = openSocket(URL);
    const { code } = this.props.match.params;
    socket.on('update', accounts => {
      this.props.updateAccount(accounts, code);
    });
  }
  render() {
    return (
        <Grid fluid>
          <Header />
          <TradingInfo />
          <DeltaChart />
        </Grid>
    );
  }
}
Account.propTypes = {
  updateAccounts: PropTypes.func.isRequired,
  updateAccount: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};
const mapStateToProps = ({ accounts }, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    account: accounts.byId[id],
  };
};
export default withRouter(connect(mapStateToProps, { updateAccounts, updateAccount })(Account));
