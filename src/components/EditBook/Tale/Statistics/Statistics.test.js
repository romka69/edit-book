import React from "react"
import { render, fireEvent, screen } from '../../../../../tests/utils/test-utils'

import Statistics from "./index"

describe("Statistics", () => {
  it("Shows statistic in Statistics", () => {
    const result = render(
      <Statistics />,
      {
        initialState: {
          chapters: {
            entries: [
              {
                Title: "Title 1",
                Subtitles: [],
                Completed:false,
              },
              {
                Title: "Title 2",
                Subtitles: [],
                Completed:true,
              }
            ]
          }
        }
      }
    )

    expect(screen.getByText("Chapter count: 2")).toBeInTheDocument()
    expect(screen.getByText("Subtitles count: 0")).toBeInTheDocument()
    expect(screen.getByText("Book is done: 50%")).toBeInTheDocument()
  })
});