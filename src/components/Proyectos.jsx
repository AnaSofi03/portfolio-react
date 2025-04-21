import React from 'react';
import '../styles/App.css';



function Proyectos() {
    const proyectos = [
        {
          titulo: 'Portfolio Web',
          imagen: '/assets/portafolio.png',
          descripcion: 'Mi portfolio personal hecho con HTML, CSS y JavaScript.',
          link: '',
        },
        {
          titulo: 'Generador de QR Codes',
          imagen: '/assets/codigoQR.png', 
          descripcion: 'Aplicación para crear códigos QR',
          link: '',
        },
        {
          titulo: 'Clon de Netflix',
          imagen: '/assets/cloneQr.png',
          descripcion: 'Clon de la interfaz de Netflix usando React y API de películas.',
          link: '',
        },
      ];
      

  return (
    <div className="proyectos-container">
      <h2>🚀 Proyectos</h2>
      <div className="proyectos-grid">
        {proyectos.map((proyecto, i) => (
          <a
            key={i}
            href={proyecto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="proyecto-card"
          >
            <img src={proyecto.imagen} alt={proyecto.titulo} />
            <div className="proyecto-info">
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;

