
import React, { useOptimistic, useState, useRef, startTransition } from "react";

// 🔹 Acción simulada (envía el mensaje con retraso)
export async function deliverMessage(message) {
    await new Promise((res) => setTimeout(res, 1000)); // simula espera
    return message;
}

// 🔹 Componente del chat
function Thread({ messages, sendMessageAction }) {
    const formRef = useRef();

    // Acción del formulario (envía mensaje optimista primero, luego real)
    function formAction(formData) {
        addOptimisticMessage(formData.get("message")); // aparece al instante
        formRef.current.reset(); // limpia input
        startTransition(async () => {
            await sendMessageAction(formData);
        });
    }

    // Hook useOptimistic: agrega mensaje mientras se procesa
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (state, newMessage) => [
            { text: newMessage, sending: true }, // mensaje "enviando..."
            ...state,
        ]
    );

    return (
        <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
                <h5 className="mb-0">💬 Chat con useOptimistic</h5>
            </div>
            <div className="card-body">
                {/* Lista de mensajes */}
                <ul className="list-group mb-3">
                    {optimisticMessages.map((message, index) => (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            {message.text}
                            {!!message.sending && (
                                <span className="badge bg-warning text-dark">Enviando...</span>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Formulario */}
                <form action={formAction} ref={formRef} className="d-flex gap-2">
                    <input
                        type="text"
                        name="message"
                        placeholder="Escribe un mensaje..."
                        className="form-control"
                        required
                    />
                    <button type="submit" className="btn btn-success">
                        Enviar
                    </button>
                </form>
            </div>
            <div className="mt-4">
                <a href="/" className="btn btn-outline-secondary">
                    Ir al home
                </a>
            </div>
        </div>
    );
}

// 🔹 Componente principal
export default function HookUseOptimistic() {
    const [messages, setMessages] = useState([
        { text: "¡Hola! Este es el primer mensaje.", sending: false },
    ]);

    async function sendMessageAction(formData) {
        const sentMessage = await deliverMessage(formData.get("message"));
        startTransition(() => {
            setMessages((prev) => [{ text: sentMessage }, ...prev]);
        });
    }

    return (
        <div className="container mt-5">
            <Thread messages={messages} sendMessageAction={sendMessageAction} />
        </div>
    );
}
