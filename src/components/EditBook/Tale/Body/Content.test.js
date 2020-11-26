import React from "react"
import { render } from "@testing-library/react"

import Content from "./Content"

describe("Content", () => {
  it("Shows text in Content", () => {
    const result = render(
    <Content>
      Test text
    </Content>
    )

    const textEl = result.getByText("Test text")
    expect(textEl).toBeTruthy()
  })

  it("Shows 'no content' in Content", () => {
    const result = render(
    <Content />
    )

    const textEl = result.getByText("No content yet.")
    expect(textEl).toBeTruthy()
  })
});