import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

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
    const { name, position } = this.props.account;
    return (
      <Row className="user-info">
        <Col xs={6}>
          <p>{position} NEO</p>
        </Col>
        <Col xs={6}>
          <p>@{name}</p>
        </Col>
      </Row>
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
