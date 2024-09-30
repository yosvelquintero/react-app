import { ITodo, ITodoBaseProps } from '../../types/todo';

interface ITodoProps extends ITodoBaseProps {
  todo: ITodo;
}

function Todo({ todo, setDone, remove }: ITodoProps) {
  const { id, text, isDone } = todo;

  return (
    <>
      <input type='checkbox' onClick={() => setDone(id)} checked={todo.isDone} />

      <span>{isDone ? <s>{text}</s> : <>{text}</>}</span>

      <button className='remove' onClick={() => remove(id)}>
        x
      </button>
    </>
  );
}

export default Todo;
