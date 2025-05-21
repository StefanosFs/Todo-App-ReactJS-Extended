import React from "react"

function TodoCard (props) {
  const {children, handleDeleteTodo, index, handleEditTodo, editingIndex} = props

  return (
    <li className={`todoItem ${index === editingIndex ? 'editing' : ''}`}>
      {children}
      <div className="actionsContainer">
        <button 
          onClick={() => {
            handleEditTodo(index)
          }}
          className={index === editingIndex ? 'active' : ''}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
          handleDeleteTodo(index)
        }}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>   
    </li>
  )
}

export default TodoCard