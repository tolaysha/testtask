import { call, put, takeEvery } from 'redux-saga/effects'
//import { addItem } from './actions'
import * as actions from './actions';
import { getItemsWithDelay } from './api'


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchItems(action) {
   try {
      console.log('i am action in block try in saga fetchitems',action);
      console.log('i am getItemsWithDelay in saga',getItemsWithDelay);
      
      const itemsCount = yield call(getItemsWithDelay, action.payload);
      console.log('i am items in block try in saga fetchitems after call',itemsCount);
      yield put(actions.getItemsSuccess(itemsCount));
   } catch (e) {

      yield put(actions.getItemsError(e.massage));
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(actions.getItems().type, fetchItems);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/


export default mySaga;
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

