import { ITodo } from '../../types/todo';
import Todo from './Todo';

interface ITodoListViewProps {
  title: string;
  todos: ITodo[];
  emptyMessage: string;
  done: (id: string) => void;
  remove: (todoId: string) => void;
}

const TodoListView = ({ title, todos, emptyMessage, done, remove }: ITodoListViewProps) => {
  return (
    <div>
      <h3>
        {title} ({todos.length})
      </h3>
      {todos.length === 0 ? (
        <p>{emptyMessage}</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <Todo todo={todo} done={done} remove={remove} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoListView;
