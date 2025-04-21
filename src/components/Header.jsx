import React from 'react';

function Header() {
  return (
    <header className="header">
      <section id="inicio">
        <div className="contenido">
          <header>
            <div className="contenido-header">
              <h1>SG</h1>
              <nav id="nav">
                <ul id="links">
                  <li><a href="#inicio" className="seleccionado">INICIO</a></li>
                  <li><a href="#presentacion">SOBRE MI</a></li>
                  <li><a href="#estudios">ESTUDIOS</a></li>
                  <li><a href="#portfolio">SOFTSKILLS</a></li>
                  <li><a href="#footer-section">CONTACTO</a></li>
                </ul>
              </nav>
            </div>
          </header>

          <div className="presentacion">
            <img src="/assets/imagen1.jpeg" alt="Foto de perfil" className="foto-perfil" />
            <h1>Ana Sofia Guerrero</h1>
            <h2>Legajo: 61120</h2>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
