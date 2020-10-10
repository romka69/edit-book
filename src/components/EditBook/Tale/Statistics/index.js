import { connect } from "react-redux"

import Statistics from "./Statistics"

const mapStateToProps = ({ chapters }) => ({
  numOfChapters: chapters.length,
  numOfSubtitles: countSubtitles(chapters),
  percentProgress: calcProgress(chapters, chapters.length, countSubtitles(chapters))
})

export default connect(mapStateToProps)(Statistics)

function countSubtitles(chapters) {
  let counter = 0

  chapters.forEach(({ Subtitles }) => {
    if (Subtitles) counter += Subtitles.length
  })

  return counter
}

function calcProgress(chapters, chaptersLength, subtitlesLength) {
  let counter = 0

  chapters.forEach((chapter) => {
    if (chapter.Completed) counter += 1

    if (chapter.Subtitles) chapter.Subtitles.forEach(subtitle => {
      if (subtitle.Completed) counter += 1
    })
  })

  return counter / (chaptersLength + subtitlesLength) * 100
}