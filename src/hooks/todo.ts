import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from '../types';

const useTodo = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const add = (input: string): void => {
    const todo: ITodo = {
      id: uuidv4(),
      text: input,
      isDone: false
    };

    setTodos([todo, ...todos]);
  };


  const done = (id: string): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone
        };
      }

      return todo;
    });

    setTodos(newTodos);
  }

  const remove = (todoId: string): void => {
    setTodos(todos.filter(({ id }) => id !== todoId));
  };

  return {
    todos,
    add,
    done,
    remove,
  };
};

export default useTodo;

