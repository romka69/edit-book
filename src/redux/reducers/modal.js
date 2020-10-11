const initialState = false

export const modal = function (state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return state = !state

    default:
      return state
  }
}
