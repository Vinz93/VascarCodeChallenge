import { normalize } from 'normalizr';
import * as schema from './schema';
import * as accountsAPI from '../api/accounts';

export const updateAccounts = accounts => ({
  type: 'UPDATE_ACCOUNTS',
  response: normalize(accounts, schema.arrayOfAccounts),
});

export const updateAccount = (accounts, code) => ({
  type: 'UPDATE_CURRENT_ACCOUNT',
  response: normalize(accounts, schema.arrayOfAccounts),
  code,
});

export const fetchDelta = (code, delta) => (dispatch, getState) => {
  return accountsAPI.fetchDelta(code, delta).then(response => {
    dispatch({
      type: 'RECEIVE_DELTAPNL',
      deltaData: response,
    });
  });
};
