import { ITodo } from '../../types/todo';

interface ITodoProps {
  todo: ITodo;
  done: (id: string) => void;
  remove: (todoId: string) => void;
}

function Todo({ todo, done, remove }: ITodoProps) {
  const { id, text, isDone } = todo;

  return (
    <>
      <input type='checkbox' onClick={() => done(id)} checked={todo.isDone} />

      <span>{isDone ? <s>{text}</s> : <span>{text}</span>}</span>

      <button className='remove' onClick={() => remove(id)}>
        x
      </button>
    </>
  );
}

export default Todo;
