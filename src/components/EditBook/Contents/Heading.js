import React from "react"

import CheckboxChapter from "./CheckboxChapter"
import ButtonAddTitle from "./ButtonAddTitle"

const Heading = ({ title, subtitles }) => (
  <Wrapper margin="ml-3">
    <CheckboxChapter disabled={true} />
    {title}
    <br/>
    <ButtonAddTitle>
      Add subtitle
    </ButtonAddTitle>
    {
      subtitles && <Subtitles subtitles={subtitles} />
    }
  </Wrapper>
)

const Wrapper = ({ children, margin }) => {
  let className = "mt-3 h5 font-normal text-md "

  return (
    <li className={
      margin
        ? className + margin
        : className + margin
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
          margin="ml-4"
          key={item.id}
        >
          <CheckboxChapter />
          {item.title}
        </Wrapper>
      ))
    }
  </ul>
)

export default Heading
