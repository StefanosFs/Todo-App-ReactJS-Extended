import { useState } from "react"

const TodoInput = (props) => {
  const {handleAddTodos, todoValue, setTodoValue} = props
  
  return (
    <header>
      <input placeholder="Enter todo..." value={todoValue} onChange={(e) => {
        setTodoValue(e.target.value)
      }} />
      <button onClick={() => {
        handleAddTodos(todoValue)
        setTodoValue('')
      }}>Add</button>
    </header>
  )
}

export default TodoInput