import { combineReducers } from 'redux';
import { UPDATE_ACCOUNTS } from '../constants/ActionTypes';

const byId = (state = {}, action) => {
  if(action.response){
    return {
      ...state,
      ...action.response.entities.accounts,
    };
  }
  return state;
};

const allIds = ( state = [], action) => {
  switch (action.type) {
    case UPDATE_ACCOUNTS:
      return action.response.result;
    default:
      return state;
  }
};

const accounts = combineReducers({
  byId,
  allIds,
});


export default accounts;

const getAccounts = (state) => {
  return state.allIds.map(id => {
    return {...state.byId[id]};
  });
}
