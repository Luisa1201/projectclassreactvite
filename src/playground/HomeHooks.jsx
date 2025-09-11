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
             </table>

            </div>

    );
}


export default HomeHooks;