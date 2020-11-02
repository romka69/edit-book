import { createSlice } from "@reduxjs/toolkit"

import Book from "../../data/book.json"

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  entries: Book.Chapters,
}

const getIdx = (state, action) => state.entries.findIndex(chapter => chapter.Id === action.payload.parentId)

const chaptersSlice = createSlice({
  name: "chapters",
  initialState,
  reducers: {
    toggleTitle(state, action) {
      return {
        ...state,
        entries: state.entries.map(
        (chapter) => (
          chapter.Id === action.payload
            ? { ...chapter, Completed: !chapter.Completed }
            : chapter
        )
      )
      }
    },
    toggleSubtitle(state, action) {
      const idx = getIdx(state, action)
      return {
        ...state,
        entries: [
          ...state.entries.slice(0, idx),
          {
            ...state.entries[idx],
            Subtitles: state.entries[idx].Subtitles.map(subTitle => {
              if (subTitle.Id === action.payload.id)
                return { ...subTitle, Completed: !subTitle.Completed }
              else
                return subTitle
            })
          },
          ...state.entries.slice(idx + 1, state.entries.length)
        ]
      }
    },
    addTitle(state, action) {
      return {
        ...state,
        entries: state.entries.concat({ Id: Math.random()*20, Title: action.payload.text, Completed: false, Subtitles: [] })
      }
    },
    addSubtitle(state, action) {
      const idx = getIdx(state, action)
      return {
        ...state,
        entries: [
          ...state.entries.slice(0, idx),
          {
            ...state.entries[idx],
            Subtitles: state.entries[idx].Subtitles.concat(
              { Id: Math.random()*20, Title: action.payload.text, Completed: false }
            )
          },
          ...state.entries.slice(idx + 1, state.entries.length)
        ]
      }
    }
  }
})

export const { toggleTitle, toggleSubtitle, addTitle, addSubtitle } = chaptersSlice.actions
export default chaptersSlice.reducer
