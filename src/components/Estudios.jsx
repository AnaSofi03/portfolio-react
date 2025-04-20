import React from 'react';

function Estudios() {
  const estudios = [
    'Tecnicatura Universitaria en Programación - UTN',
    'Curso de Desarrollo Web - Argentina Programa',
    'Curso de React - Coderhouse',
    'Curso de JavaScript - Udemy',
  ];

  return (
    <ul>
      {estudios.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </ul>
  );
}

export default Estudios;