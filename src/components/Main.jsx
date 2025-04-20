import React from 'react';
import Estudios from './Estudios';
import SoftSkills from './SoftSkills';

function Main() {
  return (
    <main className="main">
      <section id="presentacion">
        <p>Soy estudiante de programación en la UTN-FRT y desarrolladora fullstack. Apasionada por la resolución de problemas y el aprendizaje continuo, he desarrollado proyectos personales que fortalecen mis habilidades en desarrollo de software. Busco una oportunidad para aplicar mis conocimientos y seguir creciendo profesionalmente.</p>
      </section>

      <section id="estudios">
        <h2>Estudios</h2>
        <Estudios />
      </section>

      <section id="softskills">
        <h2>Soft Skills</h2>
        <SoftSkills />
      </section>

      <section>
        <h2>Proyectos</h2>
        <p>Portfolio personal, sistema de turnos, calculadora de gastos.</p>
      </section>

      <section>
        <h2>Experiencia Laboral</h2>
        <p>Desarrolladora en prácticas - Empresa ABC.</p>
      </section>

      <section>
        <h2>Idiomas</h2>
        <ul>
          <li>Español - Nativo</li>
          <li>Inglés - Intermedio</li>
        </ul>
      </section>

      <section>
        <h2>Certificados</h2>
        <p>Curso de React en Coderhouse.</p>
      </section>
    </main>
  );
}

export default Main;

