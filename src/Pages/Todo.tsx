import React, { useState } from 'react';

interface TodoItem {
  id: number;
  title: string;
  done: boolean;
}

const Todo: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<TodoItem[]>([]);

  // Handle input change (controlled component)
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  // Handle form submit
  function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!text.trim()) return;

    const newTodo: TodoItem = {
      id: Date.now(),
      title: text.trim(),
      done: false,
    };

    setTodos([...todos, newTodo]);
    setText('');
  }

  // Toggle completed status
  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  // Delete todo
  function handleDelete(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <style>
        {`
          .todocss {
            height: 100vh;
            width: 100vw;
            background-color: lightyellow;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          h1 {
            color: green;
            margin-bottom: 20px;
          }

          ul {
            list-style: none;
            padding: 0;
          }

          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 300px;
            padding: 8px;
            background-color: white;
            margin: 5px auto;
            border-radius: 5px;
          }

          button {
            cursor: pointer;
          }
        `}
      </style>

      <div className="todocss">
        <h1>TO-DO LIST</h1>

        {/* FORM */}
        <form onSubmit={handleAdd}>
          <input
            type="text"
            value={text}
            placeholder="Enter todo item"
            onChange={handleChange}
            style={{
              padding: '10px',
              border: '2px solid blue',
              borderRadius: '5px',
              marginRight: '10px',
            }}
          />

          <button
            type="submit"
            style={{
              padding: '10px 15px',
              backgroundColor: 'green',
              color: 'white',
              borderRadius: '5px',
              border: 'none',
            }}
          >
            Add Todo
          </button>
        </form>

        {/* EMPTY MESSAGE */}
        {todos.length === 0 && <p>No todo items</p>}

        {/* TODO LIST */}
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.done ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.title}
              </span>

              <button
                onClick={() => handleDelete(todo.id)}
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '5px 8px',
                  borderRadius: '4px',
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
