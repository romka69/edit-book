import React from "react"

const Heading = ({ title, subtitle }) => {
  const className = "mb-1 text-center h5"

  return (
    <h5 className={
      title
        ? className + " font-medium text-lg"
        : className + " text-md"
      }
    >
      {
        title ? title : subtitle
      }
    </h5>
  )
}

export default Heading
