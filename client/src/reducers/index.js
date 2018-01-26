import { combineReducers } from 'redux';
import accounts from './accounts';
import deltaPnL from './deltaPnL';

const rootReducer = combineReducers({
  accounts,
  deltaPnL
});

export default rootReducer;
