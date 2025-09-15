
# 📘 Documentación de Hooks en React

Este proyecto contiene ejemplos y explicaciones de diferentes **Hooks de React**, que permiten manejar estado, efectos, contexto y optimización dentro de componentes funcionales.

---

## 🔹 useState
Permite manejar el **estado local** de un componente funcional.  
Se utiliza para guardar y actualizar valores que cambian con la interacción del usuario o el ciclo de vida del componente.

---

## 🔹 useEffect
Sirve para ejecutar **efectos secundarios** en un componente, como llamadas a APIs, suscripciones o manipulación del DOM.  
Reemplaza los métodos de ciclo de vida de clases (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).

---

## 🔹 useContext
Permite **consumir valores de un contexto** sin necesidad de pasar props manualmente a través de múltiples niveles de componentes.  
Ideal para **temas globales, autenticación o idioma**.

---

## 🔹 useReducer
Alternativa a `useState` cuando la lógica del estado es más compleja.  
Se usa junto con un **reductor** (función que define cómo se actualiza el estado basado en acciones).

---

## 🔹 useRef
Crea una referencia mutable que **no provoca renderizados** al cambiar.  
Se usa para acceder a elementos del DOM o almacenar valores persistentes entre renderizados.

---

## 🔹 useMemo
Permite **memorizar un valor calculado** para evitar cálculos costosos en cada render.  
Se usa para optimizar rendimiento.

---

## 🔹 useCallback
Devuelve una versión **memorizada de una función** que solo cambia si sus dependencias cambian.  
Útil para evitar renderizados innecesarios en componentes hijos.

---

## 🔹 useId
Genera un **ID único y estable** para elementos accesibles (como inputs y labels).  
Se asegura de que no haya colisiones de ID incluso en renderizado del lado del servidor.

---

## 🔹 useTransition
Permite diferir ciertas actualizaciones de estado para que la interfaz siga siendo **interactiva y fluida** en operaciones pesadas.

---

## 🔹 useDeferredValue
Retrasa la actualización de un valor para mejorar la **experiencia del usuario** en entradas rápidas o pesadas.  
Se usa para evitar bloqueos mientras se procesa una actualización.

---

## 🔹 useImperativeHandle
Personaliza el valor expuesto cuando se usa `ref` en un componente.  
Permite controlar qué métodos o propiedades son accesibles desde fuera.

---

## 🔹 useLayoutEffect
Similar a `useEffect`, pero se ejecuta **sincrónicamente después de que el DOM ha sido modificado**.  
Se usa cuando necesitas medir o modificar el DOM antes de que se pinte en pantalla.

---

## 🔹 useInsertionEffect
Un hook especializado que permite **insertar estilos en el DOM antes de que React realice cualquier mutación**.  
Se usa principalmente en librerías de estilos en React.

---

## 🔹 useDebugValue
Permite mostrar etiquetas personalizadas en las **DevTools de React** para mejorar la depuración de Hooks personalizados.

---

## 🔹 useSyncExternalStore
Facilita la suscripción a **stores externos** (como Redux, Zustand u otras librerías de estado global).  
Asegura compatibilidad con renderizado concurrente.

---

## 🔹 useActionState (Experimental)
Hook experimental que maneja el estado de una **acción asincrónica**.  
Permite simplificar la gestión de formularios y eventos con efectos colaterales.

---

## 🔹 useFormStatus (Experimental)
Hook experimental usado en **React Server Components**.  
Permite conocer el estado actual de un formulario (ej. `pending`, `success`, `error`).

---

## 🔹 useNavigate (React Router)
No es parte de React puro, sino de **React Router DOM**.  
Sirve para **navegar programáticamente** entre rutas en una aplicación.

---

## 🔹 useOptimistic (Experimental - React 18+)
Permite mostrar una **actualización optimista** en la UI antes de que se confirme el cambio real en el servidor.  
Muy útil en experiencias interactivas como "likes" o "comentarios".

---

# ✅ Conclusión
Estos Hooks permiten a los desarrolladores de React manejar **estado, efectos, contexto, rendimiento y flujos avanzados** dentro de componentes funcionales, facilitando la creación de aplicaciones dinámicas, escalables y eficientes.
