import { connect } from "react-redux"

import * as filtersActions from "../../../../redux/actions/visibilityFilters"
import Filters from "./Filters"

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => {
    dispatch(filtersActions.setFilter(filter))
  }
})

export default connect(null, mapDispatchToProps)(Filters)
