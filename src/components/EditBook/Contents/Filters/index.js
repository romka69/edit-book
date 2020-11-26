import { connect } from "react-redux"

import { setFilter } from "../../../../redux/slices/visibilityFilters"
import Filters from "./Filters"

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter))
})

export default connect(null, mapDispatchToProps)(Filters)
