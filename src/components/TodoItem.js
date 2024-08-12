import React from 'react';

const TodoItem = ({ todo, onDelete, onToggleImportant, onEdit }) => {
  return (
    <div
      className="todo-item"
      style={{
        backgroundColor: todo.isImportant ? 'yellow' : 'white'
      }}
    >
      <span>{todo.text}</span>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onToggleImportant}>
        {todo.isImportant ? 'Unmark Important' : 'Mark Important'}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
