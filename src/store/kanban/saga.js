import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from './actions';
import { getItemsWithDelay } from './api'


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

function* mySaga() {
  yield takeEvery(actions.getItems().type, fetchItems);
}


export default mySaga;

