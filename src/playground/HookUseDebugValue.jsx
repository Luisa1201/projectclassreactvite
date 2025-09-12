import React, { useState } from "react";
import { useSyncExternalStore, useDebugValue } from "react";

function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );

  useDebugValue(isOnline ? "Online" : "Offline");
  return isOnline;
}

function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function HookUseDebugValue() {
  const realOnlineStatus = useOnlineStatus(); 
  const [manualStatus, setManualStatus] = useState(null); 

  const isOnline = manualStatus !== null ? manualStatus : realOnlineStatus;

  return (
    <div className="container justify-content-center aling-content-center">
      <div className="text-center">
        <h2>Ejemplo de useDebugValue</h2>
        <p>Estado actual: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>

        <div className="mt-3">
          <button
            className="btn btn-success m-2"
            onClick={() => setManualStatus(true)}
          >
            Online
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={() => setManualStatus(false)}
          >
            Offline
          </button>
        </div>
        <div className="mt-2">
          <a href="/" className="btn btn-outline-secondary">
            Ir al home
          </a>
        </div>
      </div>
    </div>
    
  );

  
}

export default HookUseDebugValue;
