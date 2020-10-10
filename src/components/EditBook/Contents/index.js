import { connect } from "react-redux"

import Contents from "./Contents"

const mapStateToProps = (state) => ({
  chapters: state.chapters
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
