import React, { useState } from 'react';
    import TodoList from './components/TodoList';
    import AddTodo from './components/AddTodo';

    function App() {
      const [todos, setTodos] = useState([]);

      const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
      };

      const toggleComplete = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };

      const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      };

      const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
      };

      const pendingTasks = todos.filter((todo) => !todo.completed).length;

      return (
        <div
          className="container mx-auto p-8 bg-white rounded-lg shadow-lg"
          style={{ maxWidth: '600px' }}
        >
          <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
          <AddTodo onAddTodo={addTodo} />
          <TodoList
            todos={todos}
            onToggleComplete={toggleComplete}
            onDeleteTodo={deleteTodo}
          />
          <div className="mt-4 flex justify-between items-center mx-4">
            <p className="text-sm text-gray-600">
              You have {pendingTasks} pending tasks
            </p>
            <button
              onClick={clearCompleted}
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              Clear Completed
            </button>
          </div>
        </div>
      );
    }

    export default App;
