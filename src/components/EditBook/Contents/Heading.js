import React from "react"

import CheckboxChapter from "./CheckboxChapter"
import ButtonAddTitle from "./ButtonAddTitle"

const Heading = ({ chapter: { Id, Title, Subtitles, Completed }, toggleChapter, toggleSubtitle }) => (
  <Wrapper nameClass="ml-3 mt-3 mb-8 font-normal">
    <CheckboxChapter
      completed={Completed}
      onChange={() => toggleChapter(Id)}
    />
    {Title}
    <br/>
    <ButtonAddTitle>
      Add subtitle
    </ButtonAddTitle>
    <SubtitlesBlock
      parentId={Id}
      subtitles={Subtitles}
      toggleSubtitle={toggleSubtitle}
    />
  </Wrapper>
)

const Wrapper = ({ children, nameClass }) => {
  let className = "text-base "

  return (
    <li className={
      nameClass
        ? className + nameClass
        : className
      }
    >
      {children}
    </li>
  )
}

const SubtitlesBlock = ({ parentId, subtitles, toggleSubtitle }) => (
  <ul>
    {
      subtitles && subtitles.map(subtitle => (
        <Wrapper
          nameClass="mt-2 ml-4 font-light"
          key={subtitle.Id}
        >
          <CheckboxChapter
            onChange={() => toggleSubtitle(parentId, subtitle.Id)}
            completed={subtitle.Completed}
          />
          {subtitle.Title}
        </Wrapper>
      ))
    }
  </ul>
)

export default Heading
