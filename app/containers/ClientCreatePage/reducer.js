import {UPDATE_FORM, CLIENT_SAVED, RESET_FORM} from './constants';
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

function clientCreateReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FORM:
      {
        let client = state.get('client').toJS();
        //console.log(client);
        client[action.target.name] = action.target.value;
        console.log(client);
        //console.log(fromJS(client));
        return state.set("client", fromJS(client));
      }
    case CLIENT_SAVED:
      {
        let client = action.client;
        return state.set("client", fromJS(client));
      }
    case RESET_FORM:
      {
        return initialState;
      }
    default:
      return state;
  }
}
export default clientCreateReducer;