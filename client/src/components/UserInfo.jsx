import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

class UserInfo extends Component {
  render() {
    if (!this.props.account) return (<p>Loading..</p>);
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
  account: PropTypes.object.isRequired,
};

const mapStateToProps = ({ accounts }) => ({
  account: accounts.byId[accounts.allIds[0]],
});
export default connect(mapStateToProps)(UserInfo);
