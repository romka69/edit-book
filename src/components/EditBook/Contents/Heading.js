import React from "react"

import CheckboxChapter from "./CheckboxChapter"
import ButtonAddTitle from "./ButtonAddTitle"

const Heading = ({ title, subtitles }) => (
  <Wrapper nameClass="ml-3 mt-3 mb-8 font-normal">
    <CheckboxChapter disabled={true} />
    {title}
    <br/>
    <ButtonAddTitle>
      Add subtitle
    </ButtonAddTitle>
    <Subtitles subtitles={subtitles} />
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

const Subtitles = ({ subtitles }) => (
  <ul>
    {
      subtitles.map(item => (
        <Wrapper
          nameClass="mt-2 ml-4 font-light"
          key={item.Id}
        >
          <CheckboxChapter />
          {item.Title}
        </Wrapper>
      ))
    }
  </ul>
)

export default Heading
