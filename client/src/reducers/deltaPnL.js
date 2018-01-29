// import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

export default function deltapnl(state = { data: [], avg: 0, name:'', id: 0 }, action) {
  switch (action.type) {
    case 'RECEIVE_DELTAPNL':
    const { pnlData, avg, id, name } = action.deltaData;
      return { data: pnlData, avg, id, name };
    case 'UPDATE_ACCOUNTS':
      console.log('deltaPnl reducer')
      const { accounts } = action.response.entities;
      console.log(accounts);
      const pnl = accounts[state.id].pnl;
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()} ${date.getSeconds()}`
      return {
          ...state,
          data:[...state.data.slice(1), { pnl, time }],
         }
    default:
      return state;
  }
}
