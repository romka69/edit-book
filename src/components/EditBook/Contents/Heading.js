import React from "react"

import CheckboxChapter from "./CheckboxChapter"
import ButtonAddTitle from "./ButtonAddTitle"

const Heading = ({ chapter: { Id, Title, Subtitles, Completed }, toggleChapter, toggleSubtitle }) => (
  <Wrapper nameClass="ml-3 mt-3 mb-8 font-normal">
    <CheckboxChapter
      completed={Completed}
      id={Id}
      toggleChapter={toggleChapter}
    />
    {Title}
    <br/>
    <ButtonAddTitle>
      Add subtitle
    </ButtonAddTitle>
    <SubtitlesBlock
      parent={Id}
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

const SubtitlesBlock = ({ parent, subtitles, toggleSubtitle }) => (
  <ul>
    {
      subtitles && subtitles.map(subtitle => (
        <Wrapper
          nameClass="mt-2 ml-4 font-light"
          key={subtitle.Id}
        >
          <CheckboxChapter
            parent={parent}
            completed={subtitle.Completed}
            id={subtitle.Id}
            toggleSubtitle={toggleSubtitle}
          />
          {subtitle.Title}
        </Wrapper>
      ))
    }
  </ul>
)

export default Heading
