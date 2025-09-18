export interface InputBarProps {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
  placeholder?: string;
}

export interface Todo {
  id: string;
  todo: string;
  isCompleted: boolean;
}

export interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}
