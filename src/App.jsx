import { useEffect, useState } from "react";
import "./App.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM");
    if (!localValue) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos));
  }, [todos]);

  function addTodos(title) {
    setTodos((current) => [
      ...current,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos((current) =>
      current.map((todo) => {
        if (todo.id === id) return { ...todo, completed };
        return todo;
      })
    );
  }

  function deleteTodo(id) {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <NewTodoForm addTodos={addTodos} />

      <div className="border-style-solid border-blue-700 border-2 w-max m-auto p-10 rounded-xl ">
        <h1 className="flex items-center justify-center m-auto font-bold text-5xl">
          Todo List
        </h1>

        <div className="px-5 py-3 m-5  w-max">
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
