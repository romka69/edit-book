import { createSlice } from "@reduxjs/toolkit"

import Book from "../../data/book.json"

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  title: Book.Title,
  annotation: Book.Annotation
}

const bookInfoSlice = createSlice({
  name: "bookInfo",
  initialState,
})

export default bookInfoSlice.reducer
