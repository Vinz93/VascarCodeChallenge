import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';
import { updateAccounts } from '../actions';

const URL = 'http://localhost:3335';

class UserInfo extends Component {

  componentWillMount() {
    const socket = openSocket(URL);
    socket.on('update', accounts => {
      this.props.updateAccounts(accounts);
    });
  }
  render() {
    if (!this.props.account) return (<p>ja race account</p>);
    const { name, position, pnl, volume } = this.props.account;
    return (
      <div className="order-book">
        <h3>User: {name}</h3>
        <p>position: {position}.</p>
        <p>pnl: {pnl}.</p>
        <p>volume: {volume}.</p>
      </div>
    );
  }
}

UserInfo.propTypes = {
  updateAccounts: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
};

const mapStateToProps = ({ accounts }) => ({
  account: accounts.byId[accounts.allIds[0]],
});
export default connect(mapStateToProps, { updateAccounts })(UserInfo);
