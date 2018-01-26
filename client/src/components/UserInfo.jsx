import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { subscribeToPnl } from '../api';


class UserInfo extends Component {
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
        position: accounts[0].position,
        volume: accounts[0].volume,
      });
    });
  }
  render() {
    const { name, position, pnl, volume } = this.state;
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

export default UserInfo;

// {this.state.orders.map(order => <li key={order.price}>
// price :{order.price}</li>)}
