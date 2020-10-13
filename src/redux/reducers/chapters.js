import * as chaptersActionTypes from "../actionTypes/chapters"
import Book from "../../data/book.json"

const initialState = Book.Chapters

export const chapters = function (state = initialState, action) {
  const idx = state.findIndex(chapter => chapter.Id === action.parentId)

  switch (action.type) {
    case chaptersActionTypes.TOGGLE_TITLE:
      return state.map(
        (chapter) => (
          chapter.Id === action.id
            ? { ...chapter, Completed: !chapter.Completed }
            : chapter
        )
      )

    case chaptersActionTypes.TOGGLE_SUBTITLE:
      return [
        ...state.slice(0, idx),
        {
          ...state[idx],
          Subtitles: state[idx].Subtitles.map(subTitle => {
            if (subTitle.Id === action.id)
              return { ...subTitle, Completed: !subTitle.Completed }
            else
              return subTitle
          })
        },
        ...state.slice(idx + 1, state.length)
      ]

    case chaptersActionTypes.ADD_TITLE:
      return state.concat({ Id: Math.random()*20, Title: action.text, Completed: false, Subtitles: [] })

    case chaptersActionTypes.ADD_SUBTITLE:
      return [
        ...state.slice(0, idx),
        {
          ...state[idx],
          Subtitles: state[idx].Subtitles.concat(
            { Id: Math.random()*20, Title: action.text, Completed: false }
          )
        },
        ...state.slice(idx + 1, state.length)
      ]

    default:
      return state
  }
}
