import { combineReducers } from "redux"
import undoable from "redux-undo"

import chapters from "../slices/chapters"
import visibilityFilters from "../slices/visibilityFilters"

export default combineReducers(
  {
    chapters: undoable(chapters),
    visibilityFilters,
  }
)