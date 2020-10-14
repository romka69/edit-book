import * as filtersActionTypes from "../actionTypes/visibilityFilters"

const initialState = "SHOW_ALL"

export const visibilityFilters = function(state = initialState, action) {
  switch(action.type) {
    case filtersActionTypes.SET_FILTER:
      return action.filter

    default:
      return state
  }
}
