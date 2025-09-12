import { createContext, useContext, useState } from "react";

// 1. Creamos el contexto
const ThemeContext = createContext();

// 2. Componente proveedor (maneja el estado global)
function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Componente que consume el contexto
function Post() {
  const { darkMode } = useContext(ThemeContext);

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

// 4. Componente principal
export default function Page() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className="container text-center mt-5">
        <h2 className="mb-4">Ejemplo con useContext</h2>
        <button
          className={`btn ${darkMode ? "btn-light" : "btn-dark"} mb-3`}
          onClick={toggleTheme}
        >
          Cambiar a {darkMode ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
        </button>
        <Post />
      </div>
    </ThemeProvider>
  );
}
