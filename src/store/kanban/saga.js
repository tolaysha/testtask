import { put, takeEvery, takeLatest } from 'redux-saga/effects'
//import { addItem } from './actions'
import * as actions from './actions';

function* getItemsAsync() {
  console.log('i am from saga')
  //yield put(addItem())
}
  // export function* getItemsAsync2() {
  //   yield takeLatest(actions.getApplication().type, function* ({ payload }) {
  //       try {
  //           yield put(actions.getApplicationRequest());
  //           //const token = yield select(getAccessToken);
  //           const response = yield call(getApplicationApi, { payload });
  //           if (response.error) {
  //               yield put(actions.getApplicationError());
  //               console.error(`Ошибка загрузки DataTable - ${response.Error.Message}`);
  //           } else {
  //               yield put(actions.getApplicationSuccess(response));
  //           }
  //       } catch (e) {
  //           yield put(actions.getApplicationError());
  //           console.error(`Ошибка обработки запроса на получение обращения - ${e}`);
  //       }
  //   });
  // }
export default function* watchItemsAsync() {
  yield takeEvery(actions.addItem().type, getItemsAsync)
}
