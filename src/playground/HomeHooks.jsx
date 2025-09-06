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
                        <td><strong>useState</strong></td>
                        <td><a href="/useState" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Maneja el estado dentro de un componente funcional.</td>
                        <td>Estado</td>
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
                        <td><strong>useDebugValue</strong></td>
                        <td><a href="/useDebugValue" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Para mostrar un valor de depuración legible.</td>
                        <td>Estado</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><strong>useDebugValue</strong></td>
                        <td><a href="/useDebugValue" className="btn btn-primary btn-sm">Ir a ejemplo</a></td>
                        <td>Para mostrar un valor de depuración legible.</td>
                        <td>Estado</td>
                    </tr>
                </tbody>
             </table>

            </div>

    );
}


export default HomeHooks;