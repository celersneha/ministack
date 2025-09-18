import React from "react";
import type { TodoListProps } from "../types";
import { Checkbox } from "@/components/ui/checkbox";

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle }) => (
  <ul className="mt-4 space-y-2">
    {todos.map((todo, idx) => (
      <li
        key={idx}
        className={`p-2 border rounded bg-muted ${
          todo.isCompleted ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.todo}
        <button onClick={() => onDelete(todo.id)} className="ml-2 text-red-500">
          Delete
        </button>
        <Checkbox
          checked={todo.isCompleted}
          onCheckedChange={() => onToggle(todo.id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
