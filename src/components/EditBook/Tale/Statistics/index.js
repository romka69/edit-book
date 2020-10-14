import { connect } from "react-redux"

import Statistics from "./Statistics"

const mapStateToProps = ({ chapters }) => ({
  numOfChapters: chapters.length,
  numOfSubtitles: countSubtitles(chapters),
  percentProgress: calcProgress(chapters, chapters.length + countSubtitles(chapters))
})

export default connect(mapStateToProps)(Statistics)

function countSubtitles(chapters) {
  return chapters.reduce((acc, cur) => acc + cur.Subtitles.length, 0)
}

function calcProgress(chapters, totalLength) {
  let numOfCompleted = reduceCompleted(chapters)

  chapters.forEach(
    ({ Subtitles }) => numOfCompleted += reduceCompleted(Subtitles)
  )

  function reduceCompleted(data) {
    return data.reduce((acc, cur) => cur.Completed ? acc + 1 : acc, 0)
  }

  return Math.round(numOfCompleted / totalLength * 100)
}