import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    toDos: [
  ],

  addToDo: (todoMsg) => {},
  updateToDo: (id, toDoMsg) => {},
  deleteToDo: (id) => {},
  completeToDo: (id) => {},
});

export const ToDoProvider = ToDoContext.Provider;

export const useToDos = () => {
  return useContext(ToDoContext);
};
