import React, { useState } from "react"
import ReactDom from "react-dom"

const ButtonAddTitle = ({ children, modal, toggleModal, action, parentId = null }) => (
  <>
    <button
      onClick={() => toggleModal()}
      className="md:w-full w-40 text-sm border border-gray-400 text-gray-800 rounded"
    >
      {children}
    </button>

    {
      modal && ReactDom.createPortal(
        <ModalBlock
          toggleModal={() => toggleModal()}
          action={action}
          parentId={parentId}
        />,
        document.getElementById("modal-root")
      )
    }
  </>
)

export default ButtonAddTitle

const ModalBlock = ({ toggleModal, action, parentId }) => {
  const [input, setInput] = useState('')

  return (
    <div className="fixed w-full h-full flex justify-center items-center bg-gray-400 bg-opacity-50 inset-0">
      <div className="p-5 bg-white shadow bg-opacity-100 rounded">
        <input
          className="block w-full border rounded py-3 px-4 leading-none"
          type="text"
          name="text"
          placeholder="Title"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <div className="mt-5 text-center text-gray-800 flex justify-between">
          <ActionButton onClick={toggleModal}>
            Close
          </ActionButton>
          <ActionButton onClick={
            () => { action(parentId, input); setInput(""); toggleModal()}
          }>
            Add
          </ActionButton>
        </div>
      </div>
    </div>
  )
}

const ActionButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-3 border border-gray-400 rounded"
  >
    {children}
  </button>
)
