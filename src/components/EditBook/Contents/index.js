import { connect } from "react-redux"

import Contents from "./Contents"

const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: (subtitle) => subtitle.Completed,
  SHOW_UNCOMPLETED: (subtitle) => !subtitle.Completed
}

const mapStateToProps = (state) => ({
  chapters: state.chapters.filter(filters[state.visibilityFilter])
  // chapters: state.chapters.map(
  //   chapter => (
  //     chapter.Subtitles && chapter.Subtitles.length
  //       ? chapter.Subtitles.filter(filters[state.visibilityFilter]
  //       : chapter.Subtitles
  //   )
  // )
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Contents)
