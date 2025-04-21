import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/App.css';

const redes = [
  {
    nombre: 'LinkedIn',
    url: 'www.linkedin.com/in/sofia-guerrero-16764625b',
    icono: <FaLinkedin />,
  },
  {
    nombre: 'GitHub',
    url: 'https://github.com/AnaSofi03',
    icono: <FaGithub />,
  },
];

function Footer() {
  return (
    <section id="footer-section">
      <footer className="footer">
        <p className="footer-title">Seguime en redes</p>
        <div className="footer-links">
          {redes.map((red) => (
            <a
              key={red.nombre}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <span className="footer-icon">{red.icono}</span>
              {red.nombre}
            </a>
          ))}
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Sofia Guerrero • Todos los derechos reservados.</p>
      </footer>
    </section>
  );
}

export default Footer;
