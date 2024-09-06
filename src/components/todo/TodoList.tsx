import { ITodo } from '../../types/todo';
import Todo from './Todo';

interface ITodoListProps {
  todos: ITodo[];
  done: (id: string) => void;
  remove: (todoId: string) => void;
}

function TodoList({ todos, done, remove }: ITodoListProps) {
  const completedTodos = todos.filter((todo) => todo.isDone);
  const pendingTodos = todos.filter((todo) => !todo.isDone);

  return (
    <div>
      {/* Pending Todos */}
      <h3>Pending Todos ({pendingTodos.length})</h3>
      {pendingTodos.length === 0 ? (
        <p>No pending todos</p>
      ) : (
        <ul>
          {pendingTodos.map((todo) => (
            <li key={todo.id}>
              <Todo todo={todo} done={done} remove={remove} />
            </li>
          ))}
        </ul>
      )}

      {/* Completed Todos */}
      <h3>Completed Todos ({completedTodos.length})</h3>
      {completedTodos.length === 0 ? (
        <p>No completed todos</p>
      ) : (
        <ul>
          {completedTodos.map((todo) => (
            <li key={todo.id}>
              <Todo todo={todo} done={done} remove={remove} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
