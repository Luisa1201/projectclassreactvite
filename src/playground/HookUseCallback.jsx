import { useState, useCallback } from "react";
import React from "react";

// Componente hijo con Bootstrap
const IncrementButton = React.memo(({ increment }) => {
  console.log("🔄 Renderizando botón...");
  return (
    <button onClick={increment} className="btn btn-primary">
      Incrementar
    </button>
  );
});

// Componente principal
function HookUseCallback() {
  const [count, setCount] = useState(0);

  // Memoriza la función: no se recrea en cada render
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 text-center">
        <h2 className="mb-3">Ejemplo con useCallback</h2>

        <p className="fs-4">
          <strong>Contador:</strong> {count}
        </p>

        {/* Pasamos la función al hijo */}
        <IncrementButton increment={handleIncrement} />

        <div className="mt-4">
          <a href="/" className="btn btn-outline-secondary">
            Ir al home
          </a>
        </div>
      </div>
      
    </div>
    
  );
}

export default HookUseCallback;
