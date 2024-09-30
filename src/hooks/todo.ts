import { v4 as uuidv4 } from 'uuid';
import { ITodo } from '../types/todo';
import useLocalStorage from './local-storage';

const useTodo = () => {
  const [todos, setTodos] = useLocalStorage<ITodo[]>('todos', []);

  const add = (input: string): void => {
    const todo: ITodo = {
      id: uuidv4(),
      text: input,
      isDone: false,
    };

    setTodos([todo, ...todos]);
  };

  const setDone = (id: string): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const remove = (todoId: string): void => {
    setTodos(todos.filter(({ id }) => id !== todoId));
  };

  return {
    todos,
    add,
    setDone,
    remove,
  };
};

export default useTodo;
