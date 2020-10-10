import Book from "../../data/book.json"

const initialState = Book.Chapters

export const chapters = function (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
