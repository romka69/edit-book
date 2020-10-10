import React from "react"

import ButtonAddTitle from "./ButtonAddTitle"

const Header = ({ children }) => (
  <>
    <h3 className="ma-2 h3 font-semibold text-lg">
      {children}
    </h3>

    <ButtonAddTitle>
      Add Chapter
    </ButtonAddTitle>
  </>
)

export default Header
