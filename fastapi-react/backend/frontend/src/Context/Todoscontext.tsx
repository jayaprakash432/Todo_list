import { createContext } from "react"

export const TodosContext = createContext({
  todos: [],
  fetchTodos: async () => {}
})
