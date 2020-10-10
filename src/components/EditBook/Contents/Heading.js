import React from "react"

import CheckboxChapter from "./CheckboxChapter"
import ButtonAddTitle from "./ButtonAddTitle"

const Heading = ({ chapter: { Title, Subtitles, Completed }}) => (
  <Wrapper nameClass="ml-3 mt-3 mb-8 font-normal">
    <CheckboxChapter
      completed={Completed}
    />
    {Title}
    <br/>
    <ButtonAddTitle>
      Add subtitle
    </ButtonAddTitle>
    <SubtitlesBlock subtitles={Subtitles} />
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

const SubtitlesBlock = ({ subtitles }) => (
  <ul>
    {
      subtitles && subtitles.map(subtitle => (
        <Wrapper
          nameClass="mt-2 ml-4 font-light"
          key={subtitle.Id}
        >
          <CheckboxChapter />
          {subtitle.Title}
        </Wrapper>
      ))
    }
  </ul>
)

export default Heading
