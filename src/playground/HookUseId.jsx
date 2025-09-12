import { useId } from "react";

export default function Page() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Ejemplo con useId</h2>
      <form className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
        
        {/* Nombre */}
        <div className="mb-3">
          <label htmlFor={nameId} className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id={nameId}
            placeholder="Escribe tu nombre"
          />
        </div>

        {/* Correo */}
        <div className="mb-3">
          <label htmlFor={emailId} className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id={emailId}
            placeholder="correo@ejemplo.com"
          />
        </div>

        {/* Contraseña */}
        <div className="mb-3">
          <label htmlFor={passwordId} className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id={passwordId}
            placeholder="********"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Registrarse
        </button>
      </form>
    </div>
  );
}
