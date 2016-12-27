import {LOAD_CLIENTS, LOAD_CLIENTS_SUCCESS} from './constants';
import {fromJS} from 'immutable';

// The initial state of the App
const initialState = fromJS({clients: []});

function clientsReducer(state = initialState, action) {
  switch (action.type) {
      // case LOAD_CLIENTS:   return state;
    case LOAD_CLIENTS_SUCCESS:
      return state.set('clients', [...action.clients]);
    default:
      return state;
  }
}

export default clientsReducer;
