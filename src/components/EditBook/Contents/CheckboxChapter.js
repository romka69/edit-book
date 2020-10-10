import React from "react"

const CheckboxChapter = ({ parent = false, id, completed = false, toggleChapter = false, toggleSubtitle = false }) => (
  <input
    onChange={
      toggleChapter
        ? () => toggleChapter(id)
        : () => toggleSubtitle(parent, id)
    }
    className="mr-2"
    type="checkbox"
    checked={completed}
  />
)

export default CheckboxChapter
