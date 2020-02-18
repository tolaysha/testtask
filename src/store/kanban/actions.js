export const getItems = items => ({
  type: 'GET_ITEMS',
  payload: items,
})

export const addItem = () => ({
  type: 'ADD_ITEM',
})