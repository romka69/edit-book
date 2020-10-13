import { connect } from "react-redux"

import * as chaptersActions from "../../../redux/actions/chapters"
import { visibilityFilters } from "../../../redux/actions/visibilityFilters"
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
  chapters: state.chapters.map((chapter) => ({
    ...chapter,
    Subtitles: getVisibleSubtitles(chapter.Subtitles, state.visibilityFilters)
  }))
})

const mapDispatchToProps = (dispatch) => ({
  toggleTitle: (id) => {
    dispatch(chaptersActions.toggleTitle(id))
  },
  toggleSubtitle: (id, parentId) => {
    dispatch(chaptersActions.toggleSubtitle(id, parentId))
  },
  addTitle: (text) => {
    dispatch(chaptersActions.addTitle(text))
  },
  addSubtitle: (text, parentId) => {
    dispatch(chaptersActions.addSubtitle(text, parentId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Contents)
