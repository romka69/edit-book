import React from "react"
import classNames from "classnames"

import Heading from "./Heading"
import ContentBlock from "./Content"

const Chapter = ({ chapter: { Title, Subtitles, Completed, Content } }) => (
  <Wrapper completed={Completed}>
    <Heading title={true}>
      {Title}
    </Heading>
    <ContentBlock>
      {Content}
    </ContentBlock>
    <SubtitlesBlock subtitles={Subtitles}/>
  </Wrapper>
)

export default Chapter

const Wrapper = ({ children, completed }) => {
  const className = classNames({
    "rounded border-solid border-2 border-opacity-50 px-5 mb-4": true,
    "border-green-400": completed,
    "border-gray-400": !completed,
  })

  return (
    <div className={className} style={{textIndent: "1.5em"}}>
      {children}
    </div>
  )
}

const SubtitlesBlock = ({ subtitles }) => (
  <>
    {
      subtitles && subtitles.map(subtitle => (
        <Wrapper
          key={subtitle.Id}
          completed={subtitle.Completed}
        >
          <Heading>
            {subtitle.Title}
          </Heading>
          <ContentBlock>
            {subtitle.Content}
          </ContentBlock>
        </Wrapper>
      ))
    }
  </>
)
