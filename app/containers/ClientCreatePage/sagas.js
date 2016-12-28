import {takeLatest} from 'redux-saga';
import {take, call, put} from 'redux-saga/effects';
import {SAVE_FORM} from './constants';
import {clientSaved} from './actions';
import {addClient} from '../../apis/mockClientsApi';

export function * saveClientToServer(action)
{
  try {
    yield call(addClient, action.client);
    yield put(clientSaved(action.client));
  } catch (err) {
    console.log(err);
  }
}

function * client() {
  yield takeLatest(SAVE_FORM, saveClientToServer);
}

export default[client];