import React, { Suspense, useState, useDeferredValue } from 'react';

export default function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const SearchResults = ({ query }) => {
    const albums = [
      "Thriller",
      "Back in Black",
      "The Dark Side of the Moon",
      "Abbey Road",
      "Hotel California",
      "Born in the USA"
    ];

    const colors = ["primary", "success", "warning", "info", "danger", "secondary"];

    const filteredAlbums = albums.filter(album =>
      album.toLowerCase().includes(query.toLowerCase())
    );

    return (
      <div className="row mt-3">
        {filteredAlbums.length === 0 ? (
          <div className="col-12 text-center">
            <p className="text-muted">No se encontraron álbumes.</p>
          </div>
        ) : (
          filteredAlbums.map((album, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div
                className={`card text-white bg-${colors[index % colors.length]} shadow`}
                style={{ height: '100%' }}
              >
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">{album}</h5>
                  <p className="card-text text-center">
                    Álbum simulado para la búsqueda: "{query}"
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center text-primary">Buscar Álbumes</h1>

      <div className="mb-4">
        <label htmlFor="searchInput" className="form-label fw-bold">
          Escribe el nombre del álbum:
        </label>
        <input
          type="text"
          id="searchInput"
          className="form-control border-primary"
          placeholder="Ej: Thriller"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <Suspense fallback={<h2 className="text-center text-warning">Cargando resultados...</h2>}>
        <SearchResults query={deferredQuery} />
      </Suspense>

      <div className="mt-4">
          <a href="/" className="btn btn-outline-secondary">
            Ir al home
          </a>
        </div>
        
    </div>
  );
}