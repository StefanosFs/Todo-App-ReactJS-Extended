import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')
  const [editingIndex, setEditingIndex] = useState(-1)

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList }))
  }

  function handleAddTodos(newTodo) {
    if (editingIndex >= 0) {
      // If we're editing, update the existing todo
      const newTodoList = [...todos]
      newTodoList[editingIndex] = newTodo
      persistData(newTodoList)
      setTodos(newTodoList)
      setEditingIndex(-1)
    } else {
      // If we're adding a new todo
      const newTodoList = [...todos, newTodo]
      persistData(newTodoList)
      setTodos(newTodoList)
    }
    setTodoValue('')
  }

  function handleDeleteTodo(index) {
     const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
     })
     persistData(newTodoList)
     setTodos(newTodoList)
     if (index === editingIndex) {
       setEditingIndex(-1)
       setTodoValue('')
     }
  }

  function handleEditTodo(index) {
     const valueToBeEdited = todos[index]
     setTodoValue(valueToBeEdited)
     setEditingIndex(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <TodoInput 
        todoValue={todoValue} 
        setTodoValue={setTodoValue} 
        handleAddTodos={handleAddTodos}
        editingIndex={editingIndex}
      />
      <TodoList 
        handleEditTodo={handleEditTodo} 
        handleDeleteTodo={handleDeleteTodo} 
        todos={todos}
        editingIndex={editingIndex}
      />
    </>
  )
}

export default App
