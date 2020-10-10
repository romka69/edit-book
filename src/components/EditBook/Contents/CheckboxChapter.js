import React from "react"

const CheckboxChapter = ({ completed = false }) => (
  <input
    className="mr-2"
    type="checkbox"
    checked={completed}
  />

)

export default CheckboxChapter
