import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { Row, Col } from 'react-flexbox-grid';

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
    const { data, avg, fetchDelta: FDfunc } = this.props;
    return (
      <div>
        <Row center="xs">
          <h1>Delta Pnl Average</h1>
        </Row>
        <Row>
          <Col className="sparklines-container" xs={7}>
            <Sparklines data={data} limit={avg + 20}>
              <SparklinesLine color="#1c8cdc" />
              <SparklinesSpots />
            </Sparklines>
          </Col>
          <Col xs={5}>
            <DeltaAvg avg={avg} fetchDelta={FDfunc} />
          </Col>
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
