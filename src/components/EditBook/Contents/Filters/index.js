import { connect } from "react-redux"

import Filters from "./Filters"

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch({
    type: "SET_FILTER",
    filter
  })
})

export default connect(null, mapDispatchToProps)(Filters)