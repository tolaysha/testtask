import { combineReducers } from 'redux'
import { initialState } from './model'
const items = (state = initialState(), action) => {
  switch (action.type) {
    case 'GET_TODO':
      return {
        ...state
      }
    default: return state;
  }
}
const rootReducers = combineReducers({
  items
})
export default rootReducers;