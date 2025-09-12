import React from "react";

function HomeHooks(){
    return(

        <div className="container mt-4">
             <h2 className="text-center mb-4">Ejemplos de Hooks</h2>
             <table className="table table-bordered table-hover text-center">
                <thead className="table-dark">
                    <tr>
                        <th>Hook</th>
                        <th>Ruta</th>
                        <th>Descripción</th>
                        <th>Categoría</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>useDebugValue</strong></td>
                        <td><a href="/useDebugValue" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Para mostrar un valor de depuración legible.</td>
                        <td>Debug</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td><strong>useNavigate</strong></td>
                        <td><a href="/useNavigate" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Permite navegar entre rutas en React Router.</td>
                        <td>Navegación</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td><strong>useState</strong></td>
                        <td><a href="/useState" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Maneja el estado dentro de un componente funcional.</td>
                        <td>Estado</td>
                    </tr>
                </tbody>
                
                <tbody>
                    <tr>
                        <td><strong>useReducer</strong></td>
                        <td><a href="/useReducer" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Es similar al useState gancho.Permite una lógica de estado personalizada.</td>
                        <td>Estado</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useRef</strong></td>
                        <td><a href="/useRef" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Se puede utilizar para almacenar un valor mutable que no provoque una nueva representación cuando se actualiza.</td>
                        <td>Referencias</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useImperativeHandle</strong></td>
                        <td><a href="/useImperativeHandle" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Exponer un identificador ref personalizado al componente padre</td>
                        <td>Referencias</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useMemo</strong></td>
                        <td><a href="/useMemo" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Se puede utilizar para evitar que funciones costosas y que consumen muchos recursos se ejecuten innecesariamente.</td>
                        <td>Performance</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useCallback</strong></td>
                        <td><a href="/useCallback" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Se utiliza para memorizar una función de devolución de llamada.</td>
                        <td>Performance</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useTransition</strong></td>
                        <td><a href="/useTransition" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Para marcar algunas actualizaciones de estado como Transiciones.</td>
                        <td>Performance</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useDeferredValue</strong></td>
                        <td><a href="/useDeferredValue" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Permite renderizar un valor con una prioridad baja. Esto es útil para renderizar un valor que no es crítico para la interacción del usuario.</td>
                        <td>Performance</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useEffect</strong></td>
                        <td><a href="/useEffect" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Permite sincronizar un componente con un sistema externo.</td>
                        <td>Efectos / Ciclo de vida</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useLayoutEffec</strong></td>
                        <td><a href="/useLayoutEffec" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Es útil cuando necesitamos realizar cambios en el DOM y queremos asegurarnos de que el usuario los vea inmediatamente antes de que vea cualquier otra cosa .</td>
                        <td>Efectos / Ciclo de vida</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useInsertionEffect</strong></td>
                        <td><a href="/useInsertionEffect" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>está pensado para insertar estilos CSS de forma síncrona antes de que el navegador pinte la pantalla.</td>
                        <td>Efectos / Ciclo de vida</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useContext</strong></td>
                        <td><a href="/useContext" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>sirve para compartir datos globales entre componentes sin necesidad de pasarlos manualmente por props</td>
                        <td>Contexto y datos externos.</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useSyncExternalStore</strong></td>
                        <td><a href="/useSyncExternalStore" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>sirve para compartir datos globales entre componentes sin necesidad de pasarlos manualmente por props</td>
                        <td>Contexto y datos externos.</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useSyncExternalStore</strong></td>
                        <td><a href="/useSyncExternalStore" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>se usa para suscribirse a un store externo (algo que cambia fuera de React, como el estado del navegador, un WebSocket, Redux, etc.) de manera segura y sincronizada.</td>
                        <td>Contexto y datos externos.</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useId</strong></td>
                        <td><a href="/useId" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>sirve para generar IDs únicos y estables en React, ideales para inputs, labels o componentes que necesitan identificadores accesibles.</td>
                        <td>Contexto y datos externos.</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>Use</strong></td>
                        <td><a href="/use" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Sirve para leer directamente el resultado de una promesa o de un contexto dentro de un componente sin necesidad de useEffect + useState.</td>
                        <td>Nuevos en React 19</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>UseOptimistic</strong></td>
                        <td><a href="/useOptimistic" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Sirve para mostrar un estado optimista antes de que una acción asíncrona termine</td>
                        <td>Nuevos en React 19</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useFormStatus</strong></td>
                        <td><a href="/useFormStatus" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>se utiliza para conocer el estado de un formulario en medio de una acción asíncrona.</td>
                        <td>Nuevos en React 19</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useActionState</strong></td>
                        <td><a href="/useActionState" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Sirve para manejar el estado del formulario y su respuesta al ejecutar una acción (similar a useState pero integrado con acciones asincrónicas).</td>
                        <td>Nuevos en React 19</td>
                    </tr>
                </tbody>

             </table>

            </div>

    );
}


export default HomeHooks;