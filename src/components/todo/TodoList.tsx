import { ITodo } from '../../types/todo';
import TodoListView from './TodoListView';

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
      <TodoListView
        title='Pending Todos'
        todos={pendingTodos}
        emptyMessage='No pending todos'
        done={done}
        remove={remove}
      />
      \
      <TodoListView
        title='Completed Todos'
        todos={completedTodos}
        emptyMessage='No completed todos'
        done={done}
        remove={remove}
      />
    </div>
  );
}

export default TodoList;
