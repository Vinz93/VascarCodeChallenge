import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import { withRouter } from 'react-router-dom';


class UserInfo extends Component {
  render() {
    if (!this.props.accounts) return (<p>Loading..</p>);
    const { code } = this.props.match.params;
    const { name, position } = this.props.accounts[code];
    return (
      <Row className="user-info">
        <Col xs={6}>
          <p>{position}<span className="neo-green position-neo">NEO</span></p>
        </Col>
        <Col xs={6}>
          <p><span className="neo-green">@</span>{name}</p>
        </Col>
      </Row>
    );
  }
}

UserInfo.propTypes = {
  accounts: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = ({ accounts }) => ({
  accounts: accounts.byId,
});

export default withRouter(connect(mapStateToProps)(UserInfo));
