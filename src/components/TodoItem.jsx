import React from 'react';

    function TodoItem({ todo, onToggleComplete, onDeleteTodo }) {
      return (
        <li
          className="flex items-center justify-between p-2 border-b border-gray-300"
          key={todo.id}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleComplete(todo.id)}
              className="mr-2"
            />
            <span
              className={todo.completed ? 'line-through text-gray-400' : ''}
            >
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => onDeleteTodo(todo.id)}
            className="bg-red-500 text-white rounded"
            style={{ padding: '6px 10px' }}
          >
            🗑️
          </button>
        </li>
      );
    }

    export default TodoItem;
