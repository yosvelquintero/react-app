import { ITodo } from '../../types/todo';

interface ITodoProps {
  todo: ITodo;
  setDone: (id: string) => void;
  remove: (todoId: string) => void;
}

function Todo({ todo, setDone, remove }: ITodoProps) {
  const { id, text, isDone } = todo;

  return (
    <>
      <input type='checkbox' onClick={() => setDone(id)} checked={todo.isDone} />

      <span>{isDone ? <s>{text}</s> : <span>{text}</span>}</span>

      <button className='remove' onClick={() => remove(id)}>
        x
      </button>
    </>
  );
}

export default Todo;
