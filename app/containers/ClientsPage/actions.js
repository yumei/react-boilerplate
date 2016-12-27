import {LOAD_CLIENTS,LOAD_CLIENTS_SUCCESS, LOAD_CLIENTS_ERROR} from './constants';

export function loadClients() {
  return {type: LOAD_CLIENTS};
}

export function clientsLoaded(clients) {
  return {type: LOAD_CLIENTS_SUCCESS, clients};
}

export function clientsLoadingError(error) {
  return {type: LOAD_CLIENTS_ERROR, error};
}