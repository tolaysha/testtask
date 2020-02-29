import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import * as actions from './actions';
import { getItemsWithDelay } from './api'


// function* fetchItems(action) {
//    try {
//       //console.log('i am action in block try in saga fetchitems', action);
//       //console.log('i am getItemsWithDelay in saga', getItemsWithDelay);
//       const itemsCount = yield call(getItemsWithDelay, action.payload);
//       //console.log('i am items in block try in saga fetchitems after call', itemsCount);
//       yield put(actions.getItemsSuccess(itemsCount));
//    } catch (e) {
//       yield put(actions.getItemsError(e.massage));
//    }
// }
export function* ItemsSaga() {
   yield takeLatest(actions.getItems().type, function* ({ payload }) {
       try {
           yield put(actions.getItemsRequest());
           //const token = yield select(getAccessToken);
           const itemsCount = yield call(getItemsWithDelay, payload);
           if (itemsCount == null) {
               yield put(actions.getItemsError());
               console.error(`Ошибка загрузки`);
           } else {
               yield put(actions.getItemsSuccess(itemsCount));
           }
       } catch (e) {
           yield put(actions.getItemsError());
           console.error(`Ошибка обработки запроса на получение ITEMS - ${e}`);
       }
   });
   yield takeLatest(actions.postItems().type, function* ({ payload }) {
      try {
          yield put(actions.postItemsRequest());
          //const token = yield select(getAccessToken);
          const itemsCount = yield call(getItemsWithDelay, payload);
          if (itemsCount == null) {
              yield put(actions.postItemsError());
              console.error(`Ошибка загрузки`);
          } else {
              yield put(actions.postItemsSuccess(itemsCount));
          }
      } catch (e) {
          yield put(actions.postItemsError());
          console.error(`Ошибка обработки запроса на получение ITEMS - ${e}`);
      }
  });

   // yield takeLatest(actions.postApplication().type, function* ({ payload }) {
   //     try {
   //         yield put(actions.postApplicationRequest());
   //         const token = yield select(getAccessToken);
   //         const response = yield call(postApplicationApi, {token, payload: payload.values, method: payload.method})
   //         if (!response.error){
   //             yield put(actions.postApplicationSuccess({ response}));
   //             payload.history && payload.history.push(`/forms/application/${response.applicationId}`);
   //         } else {
   //             yield put(actions.postApplicationError());    
   //             console.error(`Ошибка сохранения обращения - ${response.Error.Message}`);
   //         }
   //     } catch (e) {
   //         yield put(actions.postApplicationError());
   //         console.error(`Ошибка обработки запроса на сохранение обращения - ${e}`);
   //     }
   // });
}

// function* ItemsSaga() {
//    yield takeEvery(actions.getItems().type, fetchItems);
// }

function* rootItemsSaga() {
   yield fork(ItemsSaga);
}

export default rootItemsSaga;



