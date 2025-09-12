import React, { useLayoutEffect } from "react";

function HookUseLayoutEffec() {
  useLayoutEffect(() => {
    console.log("useLayoutEffect: Antes de pintar la pantalla");
  });

  console.log("Renderizando el componente");

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-5 text-center">
        <h1 className="text-primary mb-3">¡Hola Mundo!</h1>
        <p className="fs-5 text-muted">
          Este componente usa <strong>useLayoutEffect</strong> y Bootstrap.
        </p>
        <button className="btn btn-success btn-lg mt-3">
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

export default HookUseLayoutEffec;
