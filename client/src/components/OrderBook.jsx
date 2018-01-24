import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { subscribeToPnl } from '../api';


class OrderBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Vascar',
      pnl: 0,
      volume: 0,
      position: 0,
    };
    subscribeToPnl((err, accounts) => {
      this.setState({
        name: accounts[0].name,
        pnl: accounts[0].pnl,
      });
    });
  }
  render() {
    const { name, pnl } = this.state;
    return (
      <div className="order-book">
        <h2 className="text-center">Caribean Exchange</h2>
        <h3>User: {name}</h3>
        <p>pnl: {pnl}.</p>
      </div>
    );
  }
}

export default OrderBook;

// {this.state.orders.map(order => <li key={order.price}>
// price :{order.price}</li>)}
