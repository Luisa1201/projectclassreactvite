import { Link, useNavigate } from "react-router-dom";

function HookUseNavigate() {
    const navigate = useNavigate();

    function GoRoute() {
        navigate('/useState')
    }
    return (
        <div className="container justify-content-center aling-content-center">
            <div className="text-center">
                <h2>Ejemplos de usenavigate</h2>
                <div className="list-group">
                    <button onClick={GoRoute} className="btn btn-secondary">Ruta Navigate a useState</button>
                    <Link to="/name-route">Ruta de ejemplo</Link>

                    <div className="mt-4">
                        <a href="/" className="btn btn-outline-secondary">
                            Ir al home
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default HookUseNavigate;