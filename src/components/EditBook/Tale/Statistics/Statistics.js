import React from "react"

const Statistics = ({ numOfChapters, numOfSubtitles, percentProgress }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 font-medium mb-6">
    <Wrapper>
      Chapter count: {numOfChapters}
    </Wrapper>
    <Wrapper>
      Subtitles count: {numOfSubtitles}
    </Wrapper>
    <Wrapper>
      Book is done: {percentProgress}%
    </Wrapper>
  </div>
)

const Wrapper = ({ children }) => (
  <div className="flex justify-center items-center">
    {children}
  </div>
)

export default Statistics
