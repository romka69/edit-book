import * as chaptersActions from "../actionTypes/chapters"

export const toggleTitle = (id) => ({
  type: chaptersActions.TOGGLE_TITLE,
  id
})

export const toggleSubtitle = (id, parentId) => ({
  type: chaptersActions.TOGGLE_SUBTITLE,
  id,
  parentId
})

export const addTitle = (text, parentId) => ({
  type: chaptersActions.ADD_TITLE,
  text,
  parentId
})

export const addSubtitle = (text, parentId) => ({
  type: chaptersActions.ADD_SUBTITLE,
  text,
  parentId
})
