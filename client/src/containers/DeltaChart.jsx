import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

import { fetchDelta } from '../actions';


class DeltaChart extends Component {

  componentWillMount() {
    this.fetch('Vascar', 5);
  }

  fetch(name, delta) {
    this.props.fetchDelta(name, delta);
  }
  render() {
    if (!this.props.data) return (<p>loading ..</p>);
    const { data, avg } = this.props;
    return (
      <div className="deltachart-container">
          <p>avg {avg}</p>
            <Sparklines data={data} limit={ avg + 20}>
                <SparklinesLine color="#1c8cdc" />
                <SparklinesSpots />
            </Sparklines>
      </div>
    );
  }
}

DeltaChart.propTypes = {
  data: PropTypes.array.isRequired,
  avg: PropTypes.number.isRequired,
  fetchDelta: PropTypes.func.isRequired,
};

const mapStateToProps = ({ deltaPnL }) => ({
  data: deltaPnL.data,
  avg: deltaPnL.avg,
});
export default connect(mapStateToProps, { fetchDelta })(DeltaChart);
