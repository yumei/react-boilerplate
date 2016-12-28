import {UPDATE_FORM, CLIENT_SAVED} from '../ClientCreatePage/constants';
import {LOAD_CLIENT_SUCCESS, LOAD_CLIENT_ERROR} from './constants';
import {fromJS} from 'immutable';

const initialState = fromJS({
  client: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    enrolled: true,
    gender: ""
  }
});

function clientEditReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FORM:
      {
        let client = state
          .get('client')
          .toJS();

        client[action.target.name] = action.target.value;
        console.log(client);
        return state.set("client", fromJS(client));
      }
    case CLIENT_SAVED:
      {
        let client = action.client;
        return state.set("client", fromJS(client));
      }
    case LOAD_CLIENT_SUCCESS:
      {
        let client = action.client;
        return state.set("client", fromJS(client));
      }
    default:
      return state;
  }
}
export default clientEditReducer;