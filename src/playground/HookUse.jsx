"use client";

import React, { use, Suspense } from "react";

// Componente que espera la promesa
function Message({ messagePromise }) {
    const messageContent = use(messagePromise); // espera hasta que se resuelva
    return (
        <div className="alert alert-success shadow-sm" role="alert">
            ✅ Aquí está el mensaje: <strong>{messageContent}</strong>
        </div>
    );
}

// 🔹 Contenedor con Suspense
function MessageContainer({ messagePromise }) {
    return (
        <Suspense
            fallback={
                <div className="alert alert-warning shadow-sm" role="alert">
                    ⌛ Descargando mensaje...
                </div>
            }
        >
            <Message messagePromise={messagePromise} />
        </Suspense>
    );
}

// 🔹 Función que simula una API devolviendo una promesa
function getMessage() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("¡Hola desde la promesa!"), 2000)
    );
}

// 🔹 Componente principal (export default)
export default function HookUse() {
    return (
        <div className="container text-center mt-5">
            <div className="card shadow-lg p-4 rounded-3">
                <h2 className="mb-4 text-primary">
                    Ejemplo con <code>use()</code> y <code>Suspense</code>
                </h2>
                <MessageContainer messagePromise={getMessage()} />
                <div className="mt-4">
                    <a href="/" className="btn btn-outline-secondary">
                        Ir al home
                    </a>
                </div>

            </div>
        </div>
    );
}