import React from "react"

import Header from "./Header"
import Statistics from "./Statistics"
import Annotation from "./Annotation"
import Body from "./Body"

const Tale = ({ title, annotation, chapters }) => (
  <>
    <Header>
      {title}
    </Header>
    <Statistics />
    <Annotation>
      {annotation}
    </Annotation>
    <Body chapters={chapters} />
  </>
)

export default Tale