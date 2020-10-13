import { combineReducers } from "redux"

import { bookInfo } from "./bookInfo"
import { chapters } from "./chapters"
import { visibilityFilter } from "./visibilityFilter"
import { modal } from "./modal"

export default combineReducers(
  {
    bookInfo,
    chapters,
    visibilityFilter,
    modal
  }
)