import React from "react"
import { render } from "@testing-library/react"

import Header from "./Header"

describe("Header", () => {
  it("Shows title in Header", () => {
    const result = render(
    <Header>
      Test header
    </Header>
    )

    const headerEl = result.getByText("Test header")
    expect(headerEl).toBeTruthy()
  })
});