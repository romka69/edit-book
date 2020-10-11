import React from "react"

import Filters from "./Filters"
import Header from "./Header"
import ButtonAddTitle from "./ButtonAddTitle"
import Heading from "./Heading"

const Contents = ({ chapters, toggleChapter, toggleSubtitle, addChapter, addSubtitle }) => (
  <div className="md:fixed py-2 px-4 rounded border-solid border md:border-0 border-gray-200">
    <Filters />
    <Header>
      Contents:
    </Header>

    <ButtonAddTitle action={addChapter}>
      Add chapter
    </ButtonAddTitle>

    <ul>
      {
        chapters && chapters.map(chapter => (
          <Heading
            key={chapter.Id}
            chapter={chapter}
            toggleChapter={toggleChapter}
            toggleSubtitle={toggleSubtitle}
            addSubtitle={addSubtitle}
          />
        ))
      }
    </ul>
  </div>
)

export default Contents
