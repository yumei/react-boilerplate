import {LOAD_CLIENT, LOAD_CLIENT_SUCCESS, LOAD_CLIENT_ERROR} from './constants';

export function loadClient(id) {
  return {type: LOAD_CLIENT, id};
}

export function clientLoaded(client) {
  return {type: LOAD_CLIENT_SUCCESS, client};
}

export function clientLoadingError(err){
  return {type:LOAD_CLIENT_ERROR, err};
}