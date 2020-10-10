import React from "react"

import Contents from "./Contents"
import Tale from "./Tale"

const EditBook = () => {
  return (
    <div className="md:flex py-10">
      <div className="md:w-1/3">
        <Contents />
      </div>
      <div className="md:w-2/3 md:pl-5">
        <Tale />
      </div>
    </div>
  )
}

export default EditBook