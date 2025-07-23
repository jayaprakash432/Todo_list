import React, { useEffect, useState } from "react"
import { Container, Stack } from "@chakra-ui/react"
import { TodosContext } from "../context/TodosContext"
import AddTodo from "./AddTodo"

type Todo = {
  id: number
  item: string
}

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([])

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8000/todos")
    const todos = await response.json()
    setTodos(todos.data)  // Ensure FastAPI returns `{"data": [...]}` format
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <TodosContext.Provider value={{ todos, fetchTodos }}>
      <Container maxW="container.xl" pt="100px">
        <AddTodo />
        <Stack gap={5}>
          {todos.map((todo) => (
            <b key={todo.id}>{todo.item}</b>
          ))}
        </Stack>
      </Container>
    </TodosContext.Provider>
  )
}
