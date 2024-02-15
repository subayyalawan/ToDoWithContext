import React, { useEffect, useState } from "react";
import { ToDoProvider } from "./context/TodoContext";
import ToDoForms from "./components/ToDoForms";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [toDos, setToDos] = useState([]);

  const addToDo = (todo) => {
    setToDos((prevToDo) => [{ ...todo }, ...prevToDo]);
  };

  const updateToDo = (todo, id) => {
    setToDos((prev) => {
      prev.map((val) => (val.id === id ? todo : val));
    });
  };

  const deleteToDo = (id) => {
    setToDos((val) => val.filter((val) => val.id !== id));
  };

  const completeToDo = (id) => {
    setToDos((val) => {
      val.map((val) => {
        val.id === id ? { ...val, completed: !val.completed } : val;
      });
    });
  };

  useEffect(() => {
    const CurrToDos = JSON.parse(localStorage.getItem("ToDosList"));
    if (CurrToDos && CurrToDos.length > 0) {
      setToDos(CurrToDos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ToDosList", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <>
      <ToDoProvider
        value={{ toDos, addToDo, updateToDo, deleteToDo, completeToDo }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <ToDoForms />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {toDos.map((item) => {
                return (
                  <div className="w-full" key={item.id}>
                    <ToDoList todo={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ToDoProvider>
    </>
  );
};

export default App;
