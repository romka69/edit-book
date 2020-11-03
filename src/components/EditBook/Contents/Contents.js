import React from "react"

import Filters from "./Filters"
import Header from "./Header"
import ButtonAddTitle from "./ButtonAddTitle"
import Heading from "./Heading"

const Contents = ({ chapters, toggleTitle, toggleSubtitle, addTitle, addSubtitle, undo }) => (
  <div className="md:fixed py-2 px-4 rounded border-solid border md:border-0 border-gray-200">
    <Filters />
    <ButtonUndo onClick={() => { undo(); }} />
    <Header>
      Contents:
    </Header>

    <ButtonAddTitle
      action={addTitle}
      header="Add title"
    />

    <ul>
      {
        chapters && chapters.map(chapter => (
          <Heading
            key={chapter._id}
            chapter={chapter}
            toggleTitle={toggleTitle}
            toggleSubtitle={toggleSubtitle}
            addSubtitle={addSubtitle}
          />
        ))
      }
    </ul>
  </div>
)

export default Contents

const ButtonUndo = ({ onClick }) => (
  <button
    onClick={onClick}
    className="md:w-full w-40 text-sm border border-gray-400 text-gray-800 rounded mt-4 mb-3"
  >
    Undo last action
  </button>
)
