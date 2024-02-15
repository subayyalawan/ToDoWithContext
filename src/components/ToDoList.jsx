import React, { useState } from "react";
import { useToDos } from "../context/TodoContext";

const ToDoList = ({ todo }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [ToDoItem, setToDoItem] = useState(todo.toDoMsg);

  const { updateToDo, deleteToDo, completeToDo } = useToDos();

  const editToDo = () => {
    updateToDo(todo.id, { ...todo, toDoMsg: ToDoItem });
    setIsEditable(false);
    completeToDo();
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={completeToDo}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg px-2 ${
          isEditable ? "border-black/10" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={ToDoItem}
        onChange={(e) => setToDoItem(e.target.value)}
        readOnly={!isEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isEditable) {
            editToDo();
          } else setIsEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={ ()=> deleteToDo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default ToDoList;
