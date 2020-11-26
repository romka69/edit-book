import React from "react"
import { render } from "@testing-library/react"

import Heading from "./Heading"

describe("Heading", () => {
  it("Shows title in Heading", () => {
    const result = render(
    <Heading>
      Test title
    </Heading>
    )

    const titleEl = result.getByText("Test title")
    expect(titleEl).toBeTruthy()
  })
});