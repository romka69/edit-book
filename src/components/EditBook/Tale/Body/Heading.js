import React from "react"
import classNames from "classnames"

const Heading = ({ children, title }) => {
  const className = classNames({
    "h5 text-center": true,
    "text-xl mb-3 mt-4": title,
    "text-base mb-2 mt-2" : !title
  })

  return (
    <h5 className={className}>
      {children}
    </h5>
  )
}

export default Heading
