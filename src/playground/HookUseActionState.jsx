import { useActionState } from "react";

// Acción simulada
export async function addToCart(prevState, queryData) {
    const itemID = queryData.get("itemID");
    if (itemID === "1") {
        return "✅ Producto agregado al carrito.";
    } else {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return "❌ No se pudo agregar: el producto está agotado.";
    }
}

function AddToCartForm({ itemID, itemTitle, icon }) {
    const [message, formAction, isPending] = useActionState(addToCart, null);

    return (
        <form
            action={formAction}
            className="card shadow-lg border-0 rounded-4 h-100"
        >
            <div className="card-body text-center p-4">
                <h5 className="card-title text-primary mb-3">
                    {icon} {itemTitle}
                </h5>

                <input type="hidden" name="itemID" value={itemID} />

                <button
                    type="submit"
                    className="btn btn-success fw-bold w-100"
                    disabled={isPending}
                >
                    {isPending ? "⏳ Agregando..." : "🛒 Agregar al carrito"}
                </button>

                {message && (
                    <div
                        className={`alert mt-3 mb-0 ${message.includes("✅") ? "alert-success" : "alert-danger"
                            }`}
                        role="alert"
                    >
                        {message}
                    </div>
                )}
            </div>
        </form>
    );
}

export default function App() {
    return (
        <div className="container-fluid min-vh-100 bg-light py-5">
            <h2 className="text-center text-dark mb-5">
                🛍️ Catálogo de Libros
            </h2>

            <div className="row g-4 px-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <AddToCartForm
                        itemID="1"
                        itemTitle="JavaScript: La Guía Definitiva"
                        icon="📘"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <AddToCartForm
                        itemID="2"
                        itemTitle="JavaScript: Las Buenas Prácticas"
                        icon="📗"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <AddToCartForm
                        itemID="3"
                        itemTitle="React: Aprendiendo con Ejemplos"
                        icon="⚛️"
                    />
                </div>
                <div className="mt-4">
                    <a href="/" className="btn btn-outline-secondary">
                        Ir al home
                    </a>
                </div>
            </div>
        </div>
    );
}
