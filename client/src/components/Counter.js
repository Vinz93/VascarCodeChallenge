import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/CounterActions';
import { subscribeToTimer } from '../api';

class Counter extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { timestamp: 'no timestamp yet' };
    subscribeToTimer((err, timestamp) => {
      const date = new Date(timestamp);
      const seconds = date.getSeconds();
      this.setState({
        timestamp: seconds,
      });
    });
  }
   componentWillMount() {

   }

  handleIncrement() {
    this.props.increment();
  }

  handleDecrement() {
    this.props.decrement();
  }

  render() {
    return (
      <div className="counter-container">
        <div className="counter-num-label">{this.props.counter}</div>
        {/* Below, the even or odd statement is simply used to demonstrate how one could
        easily use a ternary operator to conditionally show an 'even' or 'odd' string
        based on the counter's value on state. */}
        <div className="counter-even-label">{this.props.counter % 2 === 0 ? 'even' : 'odd'}</div>
        <br />
        <div className="counter-buttons">
          <button onClick={() => {this.handleDecrement();}}>-</button>
          <button onClick={() => {this.handleIncrement();}}>+</button>
        </div>
        <p> This is the timer value: {this.state.timestamp}</p>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapStateToProps = ({ counter }) => ({
  counter,
});
export default connect(mapStateToProps, { increment, decrement })(Counter);
