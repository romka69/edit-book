import React from "react"

const Statistics = ({ numOfChapters, numOfSubtitles, percentProgress }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 font-medium mb-6">
    <div className="flex justify-center items-center">
      Chapter count: {numOfChapters}
    </div>
    <div className="flex justify-center items-center">
      Subtitles count: {numOfSubtitles}
    </div>
    <div className="flex justify-center items-center">
      Book is done: {percentProgress}%
    </div>
  </div>
)

export default Statistics
