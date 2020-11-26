import React from "react"
import { render } from "@testing-library/react"

import Annotation from "./Annotation"

describe("Annotation", () => {
  it("Shows text in Annotation", () => {
    const result = render(
    <Annotation>
      Text for testing
    </Annotation>
    )

    const annotationEl = result.getByText("Text for testing")
    expect(annotationEl).toBeTruthy()
  })
});