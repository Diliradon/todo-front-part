import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, id: Date.now() }]);
      setInput('');
    }
  };

  return (
    <div className='container mx-auto p-4 max-w-md'>
      <h1 className='text-3xl font-bold mb-4'>Todo App</h1>
      <div className='flex mb-4'>
        <input
          className='flex-1 p-2 border border-gray-300 rounded-l'
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Add a todo'
        />
        <button
          className='bg-blue-500 text-white p-2 rounded-r'
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul className='list-none'>
        {todos.map((todo) => (
          <li key={todo.id} className='bg-gray-100 p-2 mb-2 rounded'>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
