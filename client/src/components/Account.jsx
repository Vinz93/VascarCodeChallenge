import React from 'react';
import Header from './Header';
import TradingInfo from './TradingInfo';
import DeltaChart from '../containers/DeltaChart';
import { Grid } from 'react-flexbox-grid';

const Account = () => (
    <Grid fluid>
      <Header />
      <TradingInfo />
      <DeltaChart />
    </Grid>
);

export default Account;
