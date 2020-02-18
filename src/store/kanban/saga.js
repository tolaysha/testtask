import { put, takeEvery, call } from 'redux-saga/effects'
import { addItem } from './actions'

const delay = data => new Promise((resolve, reject) => {

  setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом "result"
    resolve(data);
  }, 1000);

});


function* getItemsAsync() {
  yield setTimeout(() => {
    console.log('i am setTimeout')
  }, 2000);
  console.log('i am from saga')
  yield put(addItem())
}
export default function* watchItemsAsync() {
  yield takeEvery(addItem().type, getItemsAsync)
}
