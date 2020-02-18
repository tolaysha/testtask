import { combineReducers } from 'redux'
import { initialState } from './model'
const items = (state = initialState(), action) => {
  switch (action.type) {
    case 'GET_TODO':
      return {
        ...state
      }
    case 'ADD_ITEM':
      console.log('from reducers', state)
      let newState = {...state}
      newState.count++;
      return  newState;
      
    default: return state;
  }
}
const rootReducers = combineReducers({
  items
})
export default rootReducers;