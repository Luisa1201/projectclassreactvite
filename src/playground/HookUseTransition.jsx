import React, { useState, useTransition } from "react";

// Componente del botón de pestaña con Bootstrap
function TabButton({ action, children, isActive }) {
  const [isPending, startTransition] = useTransition();

  const baseClass = "btn";
  const activeClass = "btn-primary"; // Pestaña activa
  const pendingClass = "btn-warning"; // Pestaña pendiente
  const defaultClass = "btn-outline-primary"; // Botón normal

  if (isActive) {
    return <button className={`${baseClass} ${activeClass}`}>{children}</button>;
  }

  if (isPending) {
    return <button className={`${baseClass} ${pendingClass}`} disabled>{children}</button>;
  }

  return (
    <button
      className={`${baseClass} ${defaultClass}`}
      onClick={() => {
        startTransition(async () => {
          await action(); // Acción asíncrona simulada
        });
      }}
    >
      {children}
    </button>
  );
}

// Componente principal
export default function App() {
  const [activeTab, setActiveTab] = useState("Inicio");
  const [content, setContent] = useState("Bienvenido a la pestaña Inicio");

  // Simula carga de datos lenta
  const loadTabContent = async (tabName) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 segundo
    setActiveTab(tabName);
    setContent(`Contenido de la pestaña ${tabName}`);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex gap-2">
        <TabButton
          isActive={activeTab === "Inicio"}
          action={() => loadTabContent("Inicio")}
        >
          Inicio
        </TabButton>
        <TabButton
          isActive={activeTab === "Perfil"}
          action={() => loadTabContent("Perfil")}
        >
          Perfil
        </TabButton>
        <TabButton
          isActive={activeTab === "Configuración"}
          action={() => loadTabContent("Configuración")}
        >
          Configuración
        </TabButton>
      </div>
      <div className="mt-4 p-3 border rounded bg-light">
        <p>{content}</p>
      </div>

      <div className="mt-4">
          <a href="/" className="btn btn-outline-secondary">
            Ir al home
          </a>
        </div>
        
    </div>
  );
}