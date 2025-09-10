import { useRef, forwardRef, useImperativeHandle } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";



const Post = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    async scrollAndFocusAddComment() {
      // Lanzamos un SweetAlert con un input
      const { value: comment } = await Swal.fire({
        title: "✍️ Nuevo comentario",
        input: "text",
        inputPlaceholder: "Escribe tu comentario aquí...",
        showCancelButton: true,
        confirmButtonText: "Agregar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#0d6efd",
        cancelButtonColor: "#6c757d",
      });

      if (comment) {
        inputRef.current.value = comment;
        inputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        inputRef.current.focus();

        Swal.fire({
          icon: "success",
          title: "¡Comentario agregado!",
          text: "Tu comentario fue escrito en el post",
          confirmButtonColor: "#198754",
        });
      }
    },
  }));

  

  return (
    <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: "400px", margin: "20px auto" }}>
      <h5 className="card-title">📢 Publicación</h5>
      <p className="card-text">
        Este es un ejemplo de un post donde puedes añadir un comentario usando <b>useImperativeHandle</b>.
      </p>
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Aquí aparecerá tu comentario..."
      />
    </div>
  );
});



export default function Page() {
  const postRef = useRef(null);

  function handleClick() {
    postRef.current.scrollAndFocusAddComment();
  }

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Ejemplo con useImperativeHandle</h2>
      
      <button onClick={handleClick} className="btn btn-primary mb-3">
        ✍️ Escribir un comentario
      </button>
      <Post ref={postRef} />

      <a href="/" className="list-group-item">Ir al Home </a>
    </div>
    
    
  );
  

  
}
