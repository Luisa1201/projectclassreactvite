# 📌 Documentación de Hooks en React con Vite

Recopilacion de los **hooks en React**, explicando para qué sirven, cómo funcionan y ejemplos de uso.  

---

## 📑 Tabla Resumen

| Hook                 | Categoría    | Descripción                                                                |
|----------------------|--------------|-----------------------------------------------------------------------------|
| **useDebugValue**    | Debug        | Muestra un valor de depuración legible en herramientas de desarrollo.       |
| **useNavigate**      | Navegación   | Permite navegar entre rutas en React Router.                                |
| **useState**         | Estado       | Maneja el estado dentro de un componente funcional.                         |
| **useReducer**       | Estado       | Lógica de estado personalizada, similar a Redux.                            |
| **useRef**           | Referencias  | Guarda valores mutables y accede a elementos del DOM sin provocar renders.  |
| **useImperativeHandle** | Referencias | Expone funciones personalizadas de un componente hijo a su padre.         |
| **useMemo**          | Performance  | Memoriza cálculos costosos para evitar recomputarlos en cada render.        |
| **useCallback**      | Performance  | Memoriza funciones para evitar renders innecesarios en componentes hijos.   |
| **useTransition**    | Performance  | Permite marcar actualizaciones como transiciones de baja prioridad.         |
| **useDeferredValue** | Performance  | Retrasa el renderizado de un valor para no bloquear la interacción.         |

---
## Funcion de cada uno 
---
## 🔍 Debug

### `useDebugValue`
Sirve para mostrar un valor de depuración legible en las herramientas de desarrollo de React, principalmente cuando se crean *custom hooks*.  

---

## 🧭 Navegación

### `useNavigate`
Sirve para navegar entre rutas dentro de una aplicación que utiliza **React Router**.  

---

## 📦 Estado

### `useState`
Sirve para manejar el estado dentro de un componente funcional de React.  

---

### `useReducer`
Sirve para manejar lógica de estado más compleja que `useState`, permitiendo definir un reductor con acciones y estados.  

---

## 📌 Referencias

### `useRef`
Sirve para almacenar valores mutables que no provocan un re-render al actualizarse y para acceder a elementos del DOM directamente.  

---

### `useImperativeHandle`
Sirve para exponer funciones o valores personalizados de un componente hijo hacia su componente padre cuando se usa junto a `forwardRef`.  

---

## ⚡ Performance

### `useMemo`
Sirve para memorizar el resultado de cálculos costosos y evitar que se vuelvan a ejecutar en cada render.  

---

### `useCallback`
Sirve para memorizar funciones y evitar que se redefinan en cada render, lo que ayuda a optimizar componentes hijos que reciben esas funciones como props.  

---

### `useTransition`
Sirve para marcar algunas actualizaciones de estado como transiciones de baja prioridad, manteniendo la interfaz fluida.  

---

### `useDeferredValue`
Sirve para retrasar el renderizado de un valor que no es crítico, permitiendo priorizar la interacción del usuario en la UI.  

---