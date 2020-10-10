import React from "react"

import Filters from "./Filters"
import Header from "./Header"
import Heading from "./Heading"

const Contents = ({ chapters }) => (
  <div className="md:fixed py-2 px-4 rounded border-solid border md:border-0 border-gray-200">
    <Filters />
    <Header>
      Contents:
    </Header>

    <ul>
      {
        chapters && chapters.map(chapter => (
          <Heading
            key={chapter.Id}
            chapter={chapter}
          />
        ))
      }
    </ul>
  </div>
)

export default Contents
