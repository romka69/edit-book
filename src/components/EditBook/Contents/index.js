import { connect } from "react-redux"

import Contents from "./Contents"

const mapStateToProps = (state) => ({
  chapters: state.chapters
})

export default connect(mapStateToProps)(Contents)
