import React from 'react';
import Header from './Header';
import DeltaChart from '../containers/DeltaChart';
import { Grid } from 'react-flexbox-grid';

const Account = () => (
    <Grid fluid>
      <Header />
      <DeltaChart />
    </Grid>
);

export default Account;
