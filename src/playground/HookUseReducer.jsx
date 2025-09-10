import React, { useReducer, useState } from "react";

// Reducer: maneja las acciones de la lista de tareas
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload }];
    case "remove":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
}

function HookUseReducer() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  function handleAddTask() {
    if (input.trim() === "") return;
    dispatch({ type: "add", payload: input });
    setInput("");
  }

  return (
    <div className="container justify-content-center aling-content-center">
      <div className="text-center">
        <h2>Ejemplo de useReducer (Lista de tareas)</h2>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nueva tarea"
          className="form-control m-2"
        />

        <button className="btn btn-primary m-2" onClick={handleAddTask}>
          Agregar tarea
        </button>

        <ul className="list-group">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item d-flex justify-content-between">
              {task.text}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => dispatch({ type: "remove", payload: task.id })}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
      <a href="/" className="list-group-item">Ir al Home </a>
    </div>
  );
}

export default HookUseReducer;
