import React from 'react';
import '../styles/App.css';

function Estudios() {
  const estudios = [
    {
      titulo: 'Técnico Universitario en Programación',
      institucion: 'UTN - Facultad Regional Tucumán',
      fecha: '2021 - Finalizado',
    },
    {
      titulo: 'Curso de Desarrollo Web',
      institucion: 'Argentina Programa',
      fecha: '2022',
    },
    {
      titulo: 'Curso de React',
      institucion: 'Coderhouse',
      fecha: '2023',
    },
    {
      titulo: 'Curso de JavaScript',
      institucion: 'Udemy',
      fecha: '2023',
    },
  ];

  return (
    <div className="estudios-container">
      <h2>📚 Estudios</h2>
      <ul>
        {estudios.map((estudio, i) => (
          <li key={i}>
            <strong>{estudio.titulo}</strong><br />
            <span>{estudio.institucion}</span><br />
            <small>{estudio.fecha}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Estudios;
