import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

class TradingInfo extends Component {
  render() {
    if (!this.props.account) return (<p>Loading..</p>);
    const { pnl, volume } = this.props.account;
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
  account: PropTypes.object.isRequired,
};

const mapStateToProps = ({ accounts }) => ({
  account: accounts.byId[accounts.allIds[0]],
});
export default connect(mapStateToProps)(TradingInfo);
