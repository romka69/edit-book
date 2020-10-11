import { connect } from "react-redux"

import ButtonAddTitle from "./ButtonAddTitle"

const mapStateToProps = (state) => ({
  modal: state.modal
})

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch({
    type: "TOGGLE_MODAL"
  }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddTitle)
