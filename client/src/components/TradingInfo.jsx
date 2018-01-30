import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import { withRouter } from 'react-router-dom';

class TradingInfo extends Component {
  render() {
    if (!this.props.accounts) return (<p>Loading..</p>);
    const { code } = this.props.match.params;
    const { pnl, volume } = this.props.accounts[code];
    return (
      <Row className="trading-info">
        <Col xs={6}>
          <div className="trading-indicator">
            Pnl: <span className="neo-green">{pnl}</span>
        </div>
        </Col>
        <Col xs={6}>
          <div className="trading-indicator">
            Volume: <span className="neo-green">{volume}</span>
          </div>
        </Col>
      </Row>
    );
  }
}

TradingInfo.propTypes = {
  accounts: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = ({ accounts }) => ({
  accounts: accounts.byId,
});
export default withRouter(connect(mapStateToProps)(TradingInfo));
