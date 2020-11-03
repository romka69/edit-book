import { connect } from "react-redux"

import Tale from "./Tale"

const mapStateToProps = ({ chapters }) => ({
  title: chapters.present.bookInfo.title,
  annotation: chapters.present.bookInfo.annotation,
  chapters: chapters.present.entries,
})

export default connect(mapStateToProps)(Tale)
