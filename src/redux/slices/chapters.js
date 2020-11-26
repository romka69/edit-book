import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { backend } from "../../api"

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  entries: [],
  bookInfo: {},
}

export const fetchBook = createAsyncThunk(
  "books/fetchCurrent",
  async (id) => {
    const responseBookInfo = await backend.books.show(id)
    const responseChapters = await backend.chapters.childsOfBook(id)

    return { bookInfo: responseBookInfo.data, Chapters: fixSubtitles(responseChapters.data) }
  }
)

// added empty "Subtitles: []" for Chapters without child-Subtitles
function fixSubtitles(chapters) {
  chapters.map((chapter) => {
    if (!("Subtitles" in chapter)) chapter.Subtitles = []
  })

  return chapters
}

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
      bookInfo: { title: action.payload.bookInfo.Title, annotation: action.payload.bookInfo.Annotation }
    })
  }
})

export const { toggleTitle, toggleSubtitle, addTitle, addSubtitle } = chaptersSlice.actions
export default chaptersSlice.reducer
