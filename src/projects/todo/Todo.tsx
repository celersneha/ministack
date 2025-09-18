import { useState } from "react";
import InputBar from "./components/InputBar";
import TodoList from "./components/TodoList";
import type { TodoListProps } from "./types";
import type { Todo } from "./types";
import { toast } from "sonner";
import useLocalStorage from "./hooks/useLocalStorage";

function TodoApp() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useLocalStorage<TodoListProps["todos"]>(
    "todos",
    []
  );

  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        todo: trimmed,
        isCompleted: false,
      };
      setTodos((prev) => [...prev, newTodo]);
      setInput("");
    }
    if (trimmed === "") {
      toast.error("Please enter a valid todo item");
    }
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="min-h-screen p-4">
      <InputBar
        value={input}
        onChange={setInput}
        onAdd={handleAdd}
        placeholder="Add a todo..."
      />
      <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
}

export default TodoApp;
