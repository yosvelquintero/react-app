import { useState } from 'react';
import TodoList from './TodoList';
import '../../App.css';
import useTodo from '../../hooks/todo';

function Todos() {
  const { todos, add, setDone, remove } = useTodo();
  const [input, setInput] = useState('');
  const [isShowError, setIsShowError] = useState(false);

  const handleTodoAdd = () => {
    const trimmedInput = input.trim();
    if (trimmedInput.length > 0) {
      add(trimmedInput);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.length > 0) {
      handleTodoAdd();
    } else if (e.key === 'Enter' && input.length === 0) {
      setIsShowError(true);
      setTimeout(() => {
        setIsShowError(false);
      }, 2000);
    }
  };

  return (
    <div className='todo-app'>
      <h2>Add a new todo</h2>
      <input
        type='text'
        placeholder='Add a new todo'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button className='add' disabled={input.length === 0} onClick={handleTodoAdd}>
        Add
      </button>
      {isShowError && <p className='error'>This field is required</p>}

      <h3>TODOs List</h3>
      <TodoList todos={todos} setDone={setDone} remove={remove} />
    </div>
  );
}

export default Todos;
