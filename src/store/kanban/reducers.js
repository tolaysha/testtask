import { combineReducers } from 'redux'
import { initialState } from './model'
import { handleActions } from 'redux-actions';
import * as actions from './actions';

const items = handleActions({
    [actions.addItem]: (state, { payload }) => {
      console.log('i am ADD_ITEM from switch in reducer', state)
      let newState = {...state}
      newState.count++;
      return  newState;
    },
    [actions.getItems]:(state, {payload})=>{
      console.log('i am GET_ITEMS from switch in reducer', state);
      return state;
    },
    
    [actions.getItemsSuccess]:(state, {payload})=>{
      console.log('i am GET_ITEMS_SUCCESS from switch in reducer', state);
      return { count:payload };
    }
    
  },
  initialState()
);
// const items = (state = initialState(), action) => {
//   console.log('i am action type in reducer', action.type)
//   switch (action.type) {
//     case '/ADD_ITEM':
//       console.log('i am ADD_ITEM from switch in reducer', state)
//       let newState = {...state}
//       newState.count++;
//       return  newState;
//     case '/GET_ITEMS':
//       console.log('i am GET_ITEMS from switch in reducer', state);
//       return state
//     default: return state;
//   }
  
// }
const rootReducers = combineReducers({
  items
})
export default rootReducers;