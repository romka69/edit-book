import Book from "../../data/book.json"

const initialState = {title: Book.Title, annotation: Book.Annotation}

export const bookInfo = function (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
