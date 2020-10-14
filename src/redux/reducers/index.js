import { combineReducers } from "redux"

import { bookInfo } from "./bookInfo"
import { chapters } from "./chapters"
import { visibilityFilters } from "./visibilityFilters"

export default combineReducers(
  {
    bookInfo,
    chapters,
    visibilityFilters,
  }
)