import { useState } from "react"

const TodoInput = (props) => {
  const {handleAddTodos, todoValue, setTodoValue, editingIndex} = props
  
  return (
    <header>
      <input 
        placeholder={editingIndex >= 0 ? "Edit todo..." : "Enter todo..."} 
        value={todoValue} 
        onChange={(e) => {
          setTodoValue(e.target.value)
        }} 
      />
      <button onClick={() => {
        handleAddTodos(todoValue)
      }}>
        {editingIndex >= 0 ? "Save" : "Add"}
      </button>
    </header>
  )
}

export default TodoInput