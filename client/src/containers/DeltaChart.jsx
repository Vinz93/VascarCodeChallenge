import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { XAxis, YAxis, BarChart, Bar, CartesianGrid, Tooltip } from 'recharts';
import { Row } from 'react-flexbox-grid';

import { fetchDelta } from '../actions';
import DeltaAvg from './../components/DeltaAvg';


class DeltaChart extends Component {

  componentWillMount() {
    this.fetch('Vascar', 5);
  }

  fetch(name, delta) {
    this.props.fetchDelta(name, delta);
  }
  render() {
    if (!this.props.data) return (<p>loading ..</p>);
    const { data: pnl, avg, fetchDelta: FDfunc } = this.props;
    const data = pnl.map(e => ({ name: e.time, PnL: e.pnl }));
    return (
      <div>
        <Row center="xs">
          <DeltaAvg avg={avg} fetchDelta={FDfunc} />
        </Row>
        <Row className="chart-container" center="xs">
          <BarChart width={1000} height={400} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
             <XAxis dataKey="name"/>
             <YAxis dataKey ="PnL"/>
             <CartesianGrid strokeDasharray="3 3"/>
             <Tooltip/>
             <Bar dataKey="PnL" fill="#f8a125" />
            </BarChart>
        </Row>
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
