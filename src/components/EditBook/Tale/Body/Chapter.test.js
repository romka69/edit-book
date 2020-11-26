import React from "react"
import { render } from "@testing-library/react"

import Chapter from "./Chapter"

describe("Chapter", () => {
  it("Shows subtitles on Chapter", () => {
    const result = render(
    <Chapter
      chapter={
        {
          Subtitles: [
            {
              _id: 1,
              Title: "Test subtitle"
            }
          ]
        }
      }
    />
    )

    const subtitleEl = result.getByText("Test subtitle")
    expect(subtitleEl).toBeTruthy()
  })
});