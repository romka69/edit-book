import React from "react"
import { render } from "@testing-library/react"

import Chapter from "./Chapter"

describe("Body", () => {
  it("Shows text in Annotation", () => {
    const result = render(
    <Chapter
      chapter={
        {
          Title: "Title 1"
        }
      }
    />
    )

    const titleEl = result.getByText("Title 1")
    expect(titleEl).toBeTruthy()
  })
});