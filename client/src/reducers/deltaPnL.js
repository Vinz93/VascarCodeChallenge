// import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

export default function deltapnl(state = { data: [], avg: 0 }, action) {
  switch (action.type) {
    case 'RECEIVE_DELTAPNL':
      return { data: action.deltaData.pnlData, avg: action.deltaData.avg };
    default:
      return state;
  }
}
