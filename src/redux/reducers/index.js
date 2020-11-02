import { combineReducers } from "redux"

import bookInfo from "../slices/bookInfo"
import chapters from "../slices/chapters"
import visibilityFilters from "../slices/visibilityFilters"

export default combineReducers(
  {
    bookInfo,
    chapters,
    visibilityFilters,
  }
)