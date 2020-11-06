import { connect } from "react-redux"

import Statistics from "./Statistics"

const mapStateToProps = ({ chapters: { present: { entries } } }) => ({
  numOfChapters: entries.length,
  numOfSubtitles: countSubtitles(entries),
  percentProgress: calcProgress(entries, entries.length + countSubtitles(entries))
})

export default connect(mapStateToProps)(Statistics)

function countSubtitles(entries) {
  return entries.reduce((acc, cur) => acc + cur.Subtitles.length, 0)
}

function calcProgress(entries, totalLength) {
  let numOfCompleted = reduceCompleted(entries)

  entries.forEach(
    ({ Subtitles }) => numOfCompleted += reduceCompleted(Subtitles)
  )

  function reduceCompleted(data) {
    return data.reduce((acc, cur) => cur.Completed ? acc + 1 : acc, 0)
  }

  return Math.round(numOfCompleted / totalLength * 100)
}