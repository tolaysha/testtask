import { combineReducers } from 'redux'
import { initialState } from './model'
import { handleActions } from 'redux-actions';
import * as actions from './actions';

// const items = handleActions({
//     [actions.addItem]: (state, { payload }) => {
//       debugger;
//       console.log('from reducers', state)
//       let newState = {...state}
//       newState.count++;
//       return  newState;
//     },
    
//   },
//   initialState()
// );
const items = (state = initialState(), action) => {
  debugger;
  switch (action.type) {
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