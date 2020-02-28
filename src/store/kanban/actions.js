import { createAction } from 'redux-actions';
export const getItems = createAction('/GET_ITEMS');
export const getItemsRequest = createAction('/GET_ITEMS_REQUEST');
export const getItemsSuccess = createAction('/GET_ITEMS_SUCCESS');
export const getItemsError = createAction('/GET_ITEMS_ERROR');
export const addItem = createAction('/ADD_ITEM');
// export const getItems = items => ({
//   type: 'GET_ITEMS',
//   payload: items,
// })
