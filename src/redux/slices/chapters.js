import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  entries: [],
  bookInfo: {},
}
export const fetchBook = createAsyncThunk(
  "books/fetchCurrent",
  async () => {
    const response = await axios({
      method: "GET",
      url: "https://book5-2d7a.restdb.io/rest/books/5fa0a047f8a0d31e00000662",
      headers: {
        "x-apikey": process.env.REACT_APP_API_TOKEN_RESTDB
      }
    })

    return response.data
  }
)

const getIdx = (state, action) => state.entries.findIndex(chapter => chapter._id === action.payload.parentId)

const chaptersSlice = createSlice({
  name: "chapters",
  initialState,
  reducers: {
    toggleTitle(state, action) {
      return {
        ...state,
        entries: state.entries.map(
        (chapter) => (
          chapter._id === action.payload
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
              if (subTitle._id === action.payload.id)
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
        entries: state.entries.concat({ _id: Math.random()*20, Title: action.payload.text, Completed: false, Subtitles: [] })
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
              { _id: Math.random()*20, Title: action.payload.text, Completed: false }
            )
          },
          ...state.entries.slice(idx + 1, state.entries.length)
        ]
      }
    }
  },
  extraReducers: {
    [fetchBook.pending]: (state, action) => ({
      ...state,
      isLoading: true
    }),
    [fetchBook.fulfilled]: (state, action) => ({
      ...initialState,
      entries: action.payload.Chapters,
      bookInfo: { title: action.payload.Title, annotation: action.payload.Annotation }
    })
  }
})

export const { toggleTitle, toggleSubtitle, addTitle, addSubtitle } = chaptersSlice.actions
export default chaptersSlice.reducer
