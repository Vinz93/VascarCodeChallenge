// import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

export default function deltapnl(state = { data: [], avg: 0 }, action) {
  switch (action.type) {
    case 'RECEIVE_DELTAPNL':
      return { data: action.response.pnlData, avg: action.response.deltaDatavg }
    default:
      return state;
    }
}
