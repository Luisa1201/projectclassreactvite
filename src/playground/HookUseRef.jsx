import { useRef } from "react";
import Swal from "sweetalert2";

export default function Counter() {
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;

    Swal.fire({
      title: "¡Clic registrado! 🎉",
      text: `Hiciste clic ${ref.current} veces`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#3085d6",
      background: "#f4f6f9",
    });
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={handleClick}
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#4CAF50",
          color: "white",
          cursor: "pointer",
        }}
      >

        ¡Hazme clic!
      </button>

      <h2>Ejemplo de useRef (Clicker)</h2>
      <div className="mt-4">
          <a href="/" className="btn btn-outline-secondary">
            Ir al home
          </a>
        </div>

    </div>
  );
}
