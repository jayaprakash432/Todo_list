import React from "react"
import { Input } from "@chakra-ui/react"
import { TodosContext } from "../context/TodosContext"

export default function AddTodo() {
  const [item, setItem] = React.useState("")
  const { todos, fetchTodos } = React.useContext(TodosContext)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newTodo = {
      id: todos.length + 1,
      item: item
    }

    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo)
    }).then(fetchTodos)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        pr="4.5rem"
        type="text"
        placeholder="Add a todo item"
        aria-label="Add a todo item"
        onChange={handleInput}
      />
    </form>
  )
}
