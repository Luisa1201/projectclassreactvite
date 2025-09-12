import { useFormStatus } from "react-dom";

// Acción simulada
async function submitForm(formData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("✅ Formulario enviado con éxito: " + formData.get("name"));
}

// Botón que muestra estado
function Submit() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            className="btn btn-primary btn-lg w-100 mt-3"
            disabled={pending}
        >
            {pending ? "⌛ Enviando..." : " 🟢 Enviar"}
        </button>
    );
}

// Formulario principal
function Form({ action }) {
    return (
        <form className="card shadow-lg border-0 rounded-4" action={action}>
            {/* Encabezado */}
            <div className="card-header bg-primary text-white text-center py-4">
                <h3 className="mb-0">Formulario con useFormStatus</h3>
            </div>

            {/* Cuerpo */}
            <div className="card-body p-5">
                <div className="mb-4">
                    <label className="form-label fw-bold">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Escribe tu nombre"
                        className="form-control form-control-lg"
                        required
                    />
                </div>
                <Submit />
            </div>

            <div className="mt-4">
                <a href="/" className="btn btn-outline-secondary">
                    Ir al home
                </a>
            </div>
        </form>
    );
}

// Componente principal
export default function HookUseFormStatus() {
    return (
        <div className="container mt-5 d-flex justify-content-center">
            {/* Ahora el ancho máximo es 600px */}
            <div style={{ width: "100%", maxWidth: "600px" }}>
                <Form action={submitForm} />
            </div>
        </div>
    );
}
