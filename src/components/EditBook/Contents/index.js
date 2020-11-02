import { connect } from "react-redux"

import { visibilityFilters } from "../../../redux/slices/visibilityFilters"
import { addTitle, addSubtitle, toggleTitle, toggleSubtitle } from "../../../redux/slices/chapters"
import Contents from "./Contents"


const getVisibleSubtitles = (subtitles, filter) => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return subtitles

    case visibilityFilters.SHOW_COMPLETED:
      return subtitles.filter(s => s.Completed)

    case visibilityFilters.SHOW_UNCOMPLETED:
      return subtitles.filter(s => !s.Completed)

    default:
      return subtitles
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.chapters.isLoading,
  chapters: state.chapters.entries.map((chapter) => ({
    ...chapter,
     Subtitles: getVisibleSubtitles(chapter.Subtitles, state.visibilityFilters)
  }))
})

const mapDispatchToProps = (dispatch) => ({
  toggleTitle: (id) => dispatch(toggleTitle(id)),
  toggleSubtitle: (id, parentId) => dispatch(toggleSubtitle(id, parentId)),
  addTitle: (text) => dispatch(addTitle(text)),
  addSubtitle: (text, parentId) => dispatch(addSubtitle(text, parentId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Contents)
