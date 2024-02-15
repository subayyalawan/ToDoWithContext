import React, { useState } from "react";
import { useToDos } from "../context/TodoContext";

const ToDoForms = () => {
  const [ToDo, setToDo] = useState("");

  const { addToDo } = useToDos();

  const addNewToDo = (e) => {
    e.preventDefault();
    if (ToDo === "") return;
    addToDo({ id: Date.now(), toDoMsg: ToDo, completed: false });
    setToDo("");
  };

  return (
    <form className="flex" onSubmit={addNewToDo}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={ToDo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default ToDoForms;
