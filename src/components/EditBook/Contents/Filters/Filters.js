import React from "react"

const Filters = ({ setFilter }) => (
  <>
    <h5 className="h5 font-medium mb-1">
      Subtitle filters
    </h5>
    <div className="md:grid md:grid-cols-3 md:gap-2 mb-4">
      <ButtonFilter onClick={() => { setFilter("SHOW_ALL") }}>
        All
      </ButtonFilter>
      <ButtonFilter onClick={() => { setFilter("SHOW_COMPLETED") }}>
        Done
      </ButtonFilter>
      <ButtonFilter onClick={() => { setFilter("SHOW_UNCOMPLETED") }}>
        Undone
      </ButtonFilter>
    </div>
  </>
)

const ButtonFilter = ({ onClick, children }) => (
  <div className="flex md:justify-center mb-2 md:mb-0 items-center">
    <button
      onClick={onClick}
      className="md:w-full md:px-2 w-40 text-sm border border-gray-400 text-gray-800 rounded"
    >
      {children}
    </button>
  </div>
)

export default Filters
