import React from "react"
import classNames from "classnames"

import CheckboxChapter from "./CheckboxChapter"
import ButtonAddTitle from "./ButtonAddTitle"

const Heading = ({
  chapter: { Id, Title, Subtitles, Completed },
  toggleTitle,
  toggleSubtitle,
  addSubtitle
}) => (
  <Wrapper firstLvl={true}>
    <CheckboxChapter
      completed={Completed}
      onChange={() => toggleTitle(Id)}
    />
    {Title}
    <br/>
    <ButtonAddTitle
      action={addSubtitle}
      parentId={Id}
      header="Add subtitle"
    />
    <SubtitlesBlock
      parentId={Id}
      subtitles={Subtitles}
      toggleSubtitle={toggleSubtitle}
    />
  </Wrapper>
)

const Wrapper = ({ children, firstLvl }) => {
  const className = classNames({
    "text-base": true,
    "ml-3 mt-3 mb-8 font-normal": firstLvl,
    "mt-2 ml-4 font-light": !firstLvl
  })

  return (
    <li className={className}>
      {children}
    </li>
  )
}

const SubtitlesBlock = ({ parentId, subtitles, toggleSubtitle }) => (
  <ul>
    {
      subtitles && subtitles.map(subtitle => (
        <Wrapper key={subtitle.Id}>
          <CheckboxChapter
            onChange={() => toggleSubtitle(subtitle.Id, parentId)}
            completed={subtitle.Completed}
          />
          {subtitle.Title}
        </Wrapper>
      ))
    }
  </ul>
)

export default Heading
