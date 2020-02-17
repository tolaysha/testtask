export const getItems = items => ({
  type: 'GET_ITEMS',
  payload: items,
})

export const setItems = items => ({
  type: 'SET_ITEMS',
  payload: items
})