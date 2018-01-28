import React, { PropTypes, Component } from 'react';
class DeltaAvg extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 5 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
 handleSubmit(event) {
   const { value } = this.state;
   if (value > 20 || value <= 0) {
     alert(`invalid input ${value} (no negatives or higher than 20)`);
     this.setState({ value: 5 });
   } else {
     this.props.fetchDelta('Vascar', value);
   }
   event.preventDefault();
 }

  render() {
    const { avg } = this.props;
    if (!avg) return (<p>Loading..</p>);
    return (
      <div className="delta-avg">
        <p className="avg-indicator">{avg.toFixed(2)}</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

DeltaAvg.propTypes = {
  avg: PropTypes.number.isRequired,
  fetchDelta: PropTypes.func.isRequired,
};
export default DeltaAvg;
