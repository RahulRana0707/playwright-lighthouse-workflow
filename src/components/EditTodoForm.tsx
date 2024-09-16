import React, { useState, ChangeEvent, FormEvent } from "react";

interface Task {
  id: string;
  task: string;
}

interface EditTodoFormProps {
  editTodo: (value: string, id: string) => void;
  task: Task;
}

export const EditTodoForm: React.FC<EditTodoFormProps> = ({
  editTodo,
  task,
}) => {
  const [value, setValue] = useState<string>(task.task);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="todo-input"
        placeholder="Update task"
        data-testid="edit-todo-input"
      />
      <button
        type="submit"
        className="todo-btn"
        data-testid="edit-todo-submit-btn"
      >
        Update Task
      </button>
    </form>
  );
};
