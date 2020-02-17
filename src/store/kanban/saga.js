import { put, takeEvery, call } from 'redux-saga/effects'
import { getItems } from './actions'

const delay = data => new Promise((resolve, reject) => {

  setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом "result"
    resolve(data);
  }, 1000);

});


function* getItemsAsync() {
  //const data = yield call(delay({name:'peter'}).then(res=>console.log(res)))
  yield put(getItems({ count: 10 }))
}
export default function* watchItemsAsync() {
  yield takeEvery(getItems().type, getItemsAsync)
}
