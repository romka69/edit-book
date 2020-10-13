import * as filtersActions from "../actionTypes/visibilityFilters"

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_UNCOMPLETED: 'SHOW_UNCOMPLETED'
}

export const setFilter = (filter) => ({
  type: filtersActions.SET_FILTER,
  filter
})
