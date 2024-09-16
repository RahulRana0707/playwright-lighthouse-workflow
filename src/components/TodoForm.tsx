import React, { useState, FormEvent, ChangeEvent } from "react";

interface TodoFormProps {
  addTodo: (value: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
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
        placeholder="What is the task today?"
        data-testid="todo-input"
      />
      <button type="submit" className="todo-btn" data-testid="add-todo-btn">
        Add Task
      </button>
    </form>
  );
};
