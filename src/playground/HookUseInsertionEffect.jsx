import { useState, useInsertionEffect } from "react";

export default function Page() {
  const [color, setColor] = useState("blue");

  // Inserta estilos antes del renderizado
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .dynamic-text {
        color: ${color};
        font-weight: bold;
        font-size: 1.3rem;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [color]);

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Ejemplo con useInsertionEffect</h2>
      <p className="dynamic-text">
        Este texto cambia de color dinámicamente con <b>useInsertionEffect</b>.
      </p>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={() => setColor("blue")}>
          Azul
        </button>
        <button className="btn btn-success" onClick={() => setColor("green")}>
          Verde
        </button>
        <button className="btn btn-danger" onClick={() => setColor("red")}>
          Rojo
        </button>
      </div>
      <div className="mt-4">
        <a href="/" className="btn btn-outline-secondary">
          Ir al home
        </a>
      </div>
    </div>
  );
}
