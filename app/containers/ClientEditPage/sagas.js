import {takeLatest} from 'redux-saga';
import {take, call, put} from 'redux-saga/effects';
import {SAVE_FORM} from '../ClientCreatePage/constants';
import {LOAD_CLIENT, LOAD_CLIENT_SUCCESS, LOAD_CLIENT_ERROR} from './constants';
import {clientSaved} from '../ClientCreatePage/actions';
import {loadClient, clientLoaded, clientLoadingError} from './actions';
import {getClient, updateClient} from '../../apis/mockClientsApi';

export function * saveClientToServer(action)
{
  try {
    yield call(updateClient, action.client);
    yield put(clientSaved(action.client));
  } catch (err) {
    console.log(err);
  }
}

export function * getClientFromApi(action) {
  try {
    yield put(clientLoaded(getClient(action.id)));
  } catch (err) {
    yield put(clientLoadingError(err));
  }
}

function * clientInfo() {
  yield takeLatest(LOAD_CLIENT, getClientFromApi);
  yield takeLatest(SAVE_FORM, saveClientToServer);
}
export default[clientInfo];