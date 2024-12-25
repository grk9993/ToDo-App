import React, { useState } from 'react';

    function AddTodo({ onAddTodo }) {
      const [input, setInput] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        onAddTodo(input);
        setInput('');
      };

      return (
        <form onSubmit={handleSubmit} className="mb-4 flex" style={{ width: '95%' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add your new todo"
            className="flex-grow p-2 border border-gray-300 rounded-l"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white p-2 rounded-r"
            style={{ padding: '8px 12px' }}
          >
            +
          </button>
        </form>
      );
    }

    export default AddTodo;
