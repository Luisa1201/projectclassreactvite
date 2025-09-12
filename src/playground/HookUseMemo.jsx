import { useState, useMemo } from "react";

const HookUseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(""); // estado para la nueva tarea

  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    if (newTodo.trim() === "") return; // evita tareas vacías
    setTodos((t) => [...t, newTodo]);
    setNewTodo(""); // limpia el input
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-3 mb-4">
        <h2 className="text-primary">Mis Tareas</h2>

        {/* Lista de tareas */}
        {todos.length === 0 ? (
          <p className="text-muted">No tienes tareas aún.</p>
        ) : (
          todos.map((todo, index) => (
            <p key={index} className="mb-1">
              😊 {todo}
            </p>
          ))
        )}

        {/* Input para escribir nueva tarea */}
        <div className="input-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Escribe una tarea..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="btn btn-success" onClick={addTodo}>
            ➕ Agregar
          </button>
        </div>
      </div>

      <div className="card shadow p-3">
        <h2 className="text-info">Contador</h2>
        <p className="fs-4">{count}</p>
        <button className="btn btn-primary me-2" onClick={increment}>
          🔼 Incrementar
        </button>

        <h2 className="mt-3 text-warning">Cálculo costoso</h2>
        <p className="fw-bold">{calculation}</p>
        <p className="text-muted">
          Gracias a <b>useMemo</b>, el cálculo costoso solo se ejecuta cuando
          cambia el contador. Si agregas tareas, ya no recalcula
          innecesariamente.
        </p>
       <div className="mt-4">
          <a href="/" className="btn btn-outline-secondary">
            Ir al home
          </a>
        </div>
      </div>
    </div>
  );
};

// Simula una función muy pesada
const expensiveCalculation = (num) => {
  console.log("Calculando...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};


export default HookUseMemo;
