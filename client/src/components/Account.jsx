import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-flexbox-grid';
import openSocket from 'socket.io-client';

import Header from './Header';
import TradingInfo from './TradingInfo';
import DeltaChart from '../containers/DeltaChart';
import { updateAccounts } from '../actions';

const URL = 'http://localhost:3335';

class Account extends Component {
  componentWillMount() {
    const socket = openSocket(URL);
    socket.on('update', accounts => {
      this.props.updateAccounts(accounts);
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
};
const mapStateToProps = ({ accounts }) => ({
  account: accounts.byId[accounts.allIds[0]],
});
export default connect(mapStateToProps, { updateAccounts })(Account);
