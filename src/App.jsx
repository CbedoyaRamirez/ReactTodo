import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodo = [
  { id: 1, title: 'Complete online curse javascript', completed: false },
  { id: 2, title: 'Complete online curse react', completed: false },
  { id: 3, title: 'Complete online curse angular', completed: false },
  { id: 4, title: 'Complete online curse vue', completed: false },
  { id: 5, title: 'Complete online curse SQL', completed: false },
]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodo);

  const handleCreateTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">

      <Header />

      <main className="container mx-auto px-4 mt-8 ">

        <TodoCreate createTodo={handleCreateTodo} />

        <TodoList todos={todos} />

        <TodoComputed />

      </main>

      <TodoFilter />
    </div>
  )
}

export default App;