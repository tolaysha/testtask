import { combineReducers } from 'redux'
import { initialState } from './model'
import { handleActions } from 'redux-actions';
import * as actions from './actions';

const items = handleActions({
  [actions.postItemsSuccess]: (state, { payload }) => {
    console.log('i am POST_ITEM_SUCCESS from switch in reducer', state)
    console.log('i am payload from POST_ITEMS_SUCCESS from switch in reducer', payload);
    return { count: payload };
  },
  //post and get items error
  [actions.getItemsSuccess]: (state, { payload }) => {
    console.log('i am payload from GET_ITEMS_SUCCESS from switch in reducer', payload);
    return { count: payload };
  }

},
  initialState()
);

const rootReducers = combineReducers({
  items
})
export default rootReducers;