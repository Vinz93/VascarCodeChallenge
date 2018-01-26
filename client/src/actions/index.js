import { browserHistory } from 'react-router';
import { normalize } from 'normalizr';
import * as schema from './schema';
import * as accountsAPI from '../api/accounts';

export const updateAccounts = accounts => ({
  type: 'UPDATE_ACCOUNTS',
  response: normalize(accounts, schema.arrayOfAccounts),
});

export const fetchDelta = (name, delta) => (dispatch, getState) => {
  return accountsAPI.fetchDelta(name, delta).then(response => {
    dispatch({
      type: 'RECEIVE_DELTAPNL',
      deltaData: response,
    });
  });
};
