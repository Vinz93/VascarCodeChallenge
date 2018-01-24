import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { subscribeToPnl } from '../api';


class OrderBook extends Component {
  constructor(props) {
    super(props);
    this.state = { pnl: 99999 };
    subscribeToPnl((err, pnl) => {
      this.setState({
        pnl,
      });
    });
  }
  render() {
    return (
      <div className="order-book">
        <p>Trading Account</p>
        <p>pnl: {this.state.pnl} real time.</p>
      </div>
    );
  }
}

export default OrderBook;

// {this.state.orders.map(order => <li key={order.price}>
// price :{order.price}</li>)}
