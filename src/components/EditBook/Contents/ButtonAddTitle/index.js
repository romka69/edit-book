import React, { useState } from "react"
import ReactDom from "react-dom"

import ModalBlock from "./Modal"

const ButtonAddTitle = ({ header, action, parentId = false }) => {
  const [modal, setModal] = useState('')

  return (
    <>
      <button
        onClick={() => setModal(true)}
        className="md:w-full w-40 text-sm border border-gray-400 text-gray-800 rounded"
      >
        {header}
      </button>

      {
        modal && ReactDom.createPortal(
          <ModalBlock
            toggleModal={() => setModal(false)}
            action={action}
            parentId={parentId}
            header={header}
          />,
          document.getElementById("modal-root")
        )
      }
    </>
  )
}

export default ButtonAddTitle
