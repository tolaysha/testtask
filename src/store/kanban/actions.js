import { createAction } from 'redux-actions';
export const getItems = createAction('/GET_ITEMS');
export const getItemsRequest = createAction('/GET_ITEMS_REQUEST');
export const getItemsSuccess = createAction('/GET_ITEMS_SUCCESS');
export const getItemsError = createAction('/GET_ITEMS_ERROR');

export const postItems = createAction('/POST_ITEM');
export const postItemsRequest = createAction('/POST_ITEMS_REQUEST');
export const postItemsSuccess = createAction('/POST_ITEMS_SUCCESS');
export const postItemsError = createAction('/POST_ITEMS_ERROR');

