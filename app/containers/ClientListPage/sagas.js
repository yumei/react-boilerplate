import {takeLatest} from 'redux-saga';
import {put} from 'redux-saga/effects';
import {LOAD_CLIENTS} from './constants';
import {loadClients, clientsLoaded, clientsLoadingError} from './actions';
import {getClients} from '../../apis/mockClientsApi';

// import request from 'utils/request'; import {selectUsername} from
// 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function * getClientsFromApi(action) {
  // Select username from store const username = yield select(selectUsername());
  // const requestURL =
  // `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request') const clients = yield
    // call(request, requestURL);
    yield put(clientsLoaded(getClients()));
  } catch (err) {
    yield put(clientsLoadingError(err));
  }
}

function * clientList() {
  yield takeLatest(LOAD_CLIENTS, getClientsFromApi);
}
/**
 * Watches for LOAD_REPOS actions and calls getRepos when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 *
export function * getClientsWatcher() {
  yield fork(takeLatest, LOAD_CLIENTS, getClients);
}

/**
 * Root saga manages watcher lifecycle
 *
export function * githubData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getClientsWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}*/

// Bootstrap sagas export default[githubData];
export default[clientList];
