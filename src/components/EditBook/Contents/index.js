import { connect } from "react-redux"

import Contents from "./Contents"

const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: (subtitle) => subtitle.Completed,
  SHOW_UNCOMPLETED: (subtitle) => !subtitle.Completed
}

const mapStateToProps = (state) => ({
  chapters: state.chapters.map((chapter) => ({
    ...chapter,
    Subtitles: chapter.Subtitles.filter(filters[state.visibilityFilter])
  }))
})

const mapDispatchToProps = (dispatch) => ({
  toggleChapter: (id) => dispatch({
    type: "TOGGLE_CHAPTER",
    id
  }),
  toggleSubtitle: (parent, id) => dispatch({
    type: "TOGGLE_SUBTITLE",
    parent,
    id
  }),
  addChapter: (title) => dispatch({
    type: "ADD_СHAPTER",
    title
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Contents)
