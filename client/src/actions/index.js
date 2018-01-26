import { browserHistory } from 'react-router';
import { normalize } from 'normalizr';
import * as schema from './schema';
// import * as api from '../api';

export const setSearch = search => ({
  type: 'SET_SEARCH',
  searchFilter: search,
});

export const updateAccounts = accounts => {
  console.log('updateAccounts Action Crator');
  return {
    type: 'UPDATE_ACCOUNTS',
    response: normalize(accounts, schema.arrayOfAccounts),
  };
};
// export const addBundle = bundle => (dispatch, getState) => {
//   return api.addBundle(bundle).then(response => {
//     dispatch({
//       type: 'ADD_BUNDLE',
//       response: normalize(response.bundle, schema.bundle),
//     });
//   });
// };
