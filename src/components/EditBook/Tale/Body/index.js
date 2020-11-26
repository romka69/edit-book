import React from "react"

import Chapter from "./Chapter"

const Body = ({ chapters }) => (
  <div className="font-serif">
    {
      chapters && chapters.map(chapter => (
        <Chapter
          key={chapter._id}
          chapter={chapter}
        />
      ))
    }
  </div>
)

export default Body