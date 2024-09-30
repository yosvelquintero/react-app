import { ITodo, ITodoBaseProps } from '../../types/todo';
import TodoListView from './TodoListView';

interface ITodoListProps extends ITodoBaseProps {
  todos: ITodo[];
}

function TodoList({ todos, setDone, remove }: ITodoListProps) {
  const completedTodos = todos.filter((todo) => todo.isDone);
  const pendingTodos = todos.filter((todo) => !todo.isDone);

  return (
    <div>
      <TodoListView
        title='Pending Todos'
        todos={pendingTodos}
        emptyMessage='No pending todos'
        setDone={setDone}
        remove={remove}
      />

      <div style={{ height: '20px' }} />

      <TodoListView
        title='Completed Todos'
        todos={completedTodos}
        emptyMessage='No completed todos'
        setDone={setDone}
        remove={remove}
      />
    </div>
  );
}

export default TodoList;
