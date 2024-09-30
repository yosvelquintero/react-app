export interface ITodo {
  id: string;
  text: string;
  isDone: boolean;
}

export interface ITodoBaseProps {
  setDone: (id: string) => void;
  remove: (todoId: string) => void;
}
