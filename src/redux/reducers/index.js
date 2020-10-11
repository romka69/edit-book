import { combineReducers } from "redux"

import { chapters } from "./chapters"
import { visibilityFilter } from "./visibilityFilter"
import { modal } from "./modal"

export default combineReducers(
  {
    chapters,
    visibilityFilter,
    modal
  }
)