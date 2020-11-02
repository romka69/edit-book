import React, { useState } from "react"

const Modal = ({ header, toggleModal, action, parentId }) => {
  const [input, setInput] = useState('')

  return (
    <div className="fixed w-full h-full flex justify-center items-center bg-gray-400 bg-opacity-50 inset-0">
      <div className="p-5 bg-white shadow bg-opacity-100 rounded">
        <h5 className="h5 text-base text-center">
          {header}
        </h5>
        <input
          className="block w-full border rounded py-3 px-4 leading-none my-6"
          type="text"
          name="text"
          placeholder="Title"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <div className="text-center text-gray-800 flex justify-between">
          <ActionButton onClick={toggleModal}>
            Close
          </ActionButton>
          <ActionButton onClick={
            () => { action({text: input, parentId}); setInput(""); toggleModal()}
          }>
            Add
          </ActionButton>
        </div>
      </div>
    </div>
  )
}

export default Modal

const ActionButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-3 border border-gray-400 rounded"
  >
    {children}
  </button>
)
