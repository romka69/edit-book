import React from "react"

import Chapter from "./Chapter"

const Body = ({ chapters }) => (
  <div className="font-serif">
    {
      chapters && chapters.map(chapter => (
        <Chapter
          key={chapter.Id}
          chapter={chapter}
        />
      ))
    }
  </div>
)

export default Body