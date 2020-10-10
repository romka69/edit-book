import Book from "../../data/book.json"

const initialState = Book.Chapters

export const chapters = function (state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_CHAPTER":
      return state.map(
        (chapter) => (
          chapter.Id === action.id
            ? { ...chapter, Completed: !chapter.Completed }
            : chapter
        )
      )
    // case "TOGGLE_SUBTITLE":
    //   return state.map(
    //     (chapter) => (
    //       chapter.Id === action.parent
    //         ? chapter.Subtitles.map(
    //             (subtitle) => (
    //               subtitle.Id === action.id
    //               ? { ...subtitle, Completed: !subtitle.Completed }
    //               : subtitle
    //             )
    //           )
    //         : chapter
    //       )
    //     )
    default:
      return state
  }
}
