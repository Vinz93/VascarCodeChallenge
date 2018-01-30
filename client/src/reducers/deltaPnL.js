// import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';
const initialState = { data: [], avg: 0, name:'', id: 0, total: 0 };
export default function deltapnl(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_DELTAPNL':
    const { pnlData, avg, id, name, total } = action.deltaData;
      return { data: pnlData, avg, id, name, total };
    case 'UPDATE_ACCOUNT':
      const { accounts } = action.response.entities;
      const pnl = accounts[action.id].pnl;
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()} ${date.getSeconds()}`;
      const newTotal = state.total - state.data[0].pnl + pnl;
      const newAvg = newTotal / state.data.length;
      return {
          ...state,
          data:[...state.data.slice(1), { pnl, time }],
          avg: newAvg
         }
    default:
      return state;
  }
}
