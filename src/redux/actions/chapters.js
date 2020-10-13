import * as chaptersActions from "../actionTypes/chapters"

export const toggleChapter = (id) => ({
  type: chaptersActions.TOGGLE_CHAPTER,
  id
})

export const toggleSubtitle = (parent, id) => ({
  type: chaptersActions.TOGGLE_SUBTITLE,
  parent,
  id
})

export const addChapter = (parent, title) => ({
  type: chaptersActions.ADD_CHAPTER,
  parent,
  title
})

export const addSubtitle = (parent, title) => ({
  type: chaptersActions.ADD_SUBTITLE,
  parent,
  title
})
