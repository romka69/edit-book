import React from "react"

import Filters from "./Filters"
import Header from "./Header"
import Heading from "./Heading"

const chapters = [
  {
    id: 1,
    title: "Chapter 1",
    subtitles: [
      {
        id: 1,
        title: "Chapter 1.1"
      },
    ]
  },
  {
    id: 2,
    title: "Chapter 2",
  },
  {
    id: 3,
    title: "Chapter 3",
  },
]

const Contents = () => (
  <div className="md:fixed py-2 px-4 rounded border-solid border md:border-0 border-gray-200">
    <Filters />

    <Header>
      Contents:
    </Header>

    <ul>
      {
        chapters.map(item => (
          <Heading
            key={item.id}
            title={item.title}
            subtitles={item.subtitles}
          />
        ))
      }
    </ul>
  </div>
)

export default Contents
