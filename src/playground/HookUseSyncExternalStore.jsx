import { useSyncExternalStore } from "react";

// Función para suscribirse a los cambios de conexión
function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

// Hook personalizado con useSyncExternalStore
function useOnlineStatus() {
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine, // estado actual
    () => true // valor por defecto en SSR
  );
}

export default function Page() {
  const isOnline = useOnlineStatus();

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Ejemplo con useSyncExternalStore</h2>
      <div
        className={`alert ${
          isOnline ? "alert-success" : "alert-danger"
        } shadow-sm`}
        role="alert"
      >
        {isOnline ? "✅ Estás conectado a Internet" : "❌ Estás sin conexión"}
      </div>
      <p className="text-muted">
        Activa el modo avión o desconéctate de la red para probar el cambio.
      </p>
    </div>
  );
}
