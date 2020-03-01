import { combineReducers } from 'redux'
import { initialState } from './model'
import { handleActions } from 'redux-actions';
import * as actions from './actions';

const items = handleActions({
  [actions.postItemsSuccess]: (state, { payload }) => {
    console.log('i am POST_ITEM_SUCCESS from switch in reducer', state)
    console.log('i am payload from POST_ITEMS_SUCCESS from switch in reducer', payload);
    return {...state, count: payload };
  },
  //post and get items error
  [actions.getItemsSuccess]: (state, { payload }) => {
    console.log('i am payload from GET_ITEMS_SUCCESS from switch in reducer', payload);
    return {...state, count: payload };
  }

},
  initialState()
);

const status = handleActions({
  [actions.postItemsRequest](state) { return { ...state, postItems: 'requested' } },
  [actions.postItemsSuccess](state) { return { ...state, postItems: 'successed' } },
  [actions.postItemsError](state) { return { ...state, postItems: 'error' } },
  [actions.getItemsRequest](state) { return { ...state, getItems: 'requested' } },
  [actions.getItemsSuccess](state) { return { ...state, getItems: 'successed' } },
  [actions.getItemsError](state) { return { ...state, getItems: 'error' } },

}, {
  getItems: 'none',
  postItems: 'none',
  // TODO: сделать эту хуету со статусами
})

const rootReducers = combineReducers({
  items,
  status,
})
export default rootReducers;