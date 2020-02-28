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
    
    [actions.getItemsSuccess]:(state, {payload})=>{
      console.log('i am GET_ITEMS_SUCCESS from switch in reducer', state);
      return { count:payload };
    }
    
  },
  initialState()
);

const rootReducers = combineReducers({
  items
})
export default rootReducers;