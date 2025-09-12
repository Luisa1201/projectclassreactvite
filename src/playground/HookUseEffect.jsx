import React, { useState, useEffect } from 'react';

function HookUseEffect() {
  const [count, setCount] = useState(0);

  // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `Has hecho clic ${count} veces`;
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card text-center shadow p-4">
        <h1 className="mb-4 text-primary">Contador con React</h1>
        <p className="fs-4">Has hecho clic <strong>{count}</strong> veces</p>
        <button
          className="btn btn-success btn-lg mt-3"
          onClick={() => setCount(count + 1)}
        >
          Haz clic aquí
        </button>

        <div className="mt-4">
          <a href="/" className="btn btn-outline-secondary">
            Ir al home
          </a>
        </div>
      </div>

    </div>
  );
}

export default HookUseEffect;
