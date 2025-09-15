import React, { createContext, useContext, useState } from "react";

// Crear contexto
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

function Post() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`card shadow-sm p-3 mb-3 rounded ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
      style={{ width: "400px", margin: "0 auto" }}
    >
      <h5 className="card-title">📢 Publicación</h5>
      <p className="card-text">
        Este post cambia de estilo según el tema usando <b>useContext</b>.
      </p>
    </div>
  );
}

function HookUseContext() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Ejemplo con useContext</h2>
      <button
        className={`btn ${darkMode ? "btn-light" : "btn-dark"} mb-3`}
        onClick={toggleTheme}
      >
        Cambiar a {darkMode ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
      </button>
      <Post />

      <div className="mt-4">
        <a href="/" className="btn btn-outline-secondary">
          Ir al home
        </a>
      </div>
    </div>
  );
}

// Envolvemos el componente con el proveedor para exportarlo
export default function HookUseContextWrapper() {
  return (
    <ThemeProvider>
      <HookUseContext />
    </ThemeProvider>
  );
}
