import { put, takeEvery } from 'redux-saga/effects'
import { addItem } from './actions'

function* getItemsAsync() {
  console.log('i am from saga')
  yield put(addItem())
}
export default function* watchItemsAsync() {
  yield takeEvery(addItem().type, getItemsAsync)
}
