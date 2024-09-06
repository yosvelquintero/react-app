import { useState } from 'react';
import TodoList from './TodoList';
import '../../App.css';
import useTodo from '../../hooks/todo';

function Todos() {
  const { todos, add, done, remove } = useTodo();
  const [input, setInput] = useState('');

  const handleTodoAdd = () => {
    add(input);
    setInput('');
  };

  return (
    <div className='todo-app'>
      <h2>Add a new todo</h2>
      <input type='text' placeholder='Add a new todo' value={input} onChange={(e) => setInput(e.target.value)} />
      <button className='add' disabled={input.length === 0} onClick={handleTodoAdd}>
        Add
      </button>

      <h2>Todo List</h2>
      <TodoList todos={todos} done={done} remove={remove} />
    </div>
  );
}

export default Todos;
