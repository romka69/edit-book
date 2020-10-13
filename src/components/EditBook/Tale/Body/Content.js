import React from "react"

const Content = ({ children }) => (
  <p className="mb-3 text-justify text-base text-gray-900">
    {
      children
        ? children
        : "No content yet."
    }
  </p>
)

export default Content
