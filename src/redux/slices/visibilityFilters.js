import { createSlice } from "@reduxjs/toolkit"

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_UNCOMPLETED: 'SHOW_UNCOMPLETED'
}

const initialState = visibilityFilters.SHOW_ALL

const filtersSlice = createSlice({
  name: "visibilityFilters",
  initialState,
  reducers: {
    setFilter(state, action) {
      return action.payload
    }
  }
})

export const { setFilter } = filtersSlice.actions
export default filtersSlice.reducer
