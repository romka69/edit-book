import React from "react"

const CheckboxChapter = ({ completed, onChange }) => (
  <input
    onChange={onChange}
    checked={completed}
    className="mr-2"
    type="checkbox"
  />
)

export default CheckboxChapter
