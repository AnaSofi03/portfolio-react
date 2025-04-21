import React from 'react';
import Estudios from './Estudios';
import SoftSkills from './SoftSkills';
import Skills from './Skills';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import Proyectos from './Proyectos';
import { FaLanguage } from 'react-icons/fa';

function Main() {
  return (
    <main className="main">
      <section id="presentacion">



      <section id="sobremi">
    
    <div class="sobremi">
        <p class="titulo-seccion">Sobre Mi</p>
        <h2>Hola, soy <span>Sofia Guerrero</span></h2>
        <h1>Desallorradora FullStack</h1>
        <p>Soy estudiante de programación en la UTN-FRT y desarrolladora fullstack. Apasionada por la resolución de problemas y el aprendizaje continuo, he desarrollado proyectos personales que fortalecen mis habilidades en desarrollo de software. Busco una oportunidad para aplicar mis conocimientos y seguir creciendo profesionalmente.</p>
        
        <a download="Curriculum Vitae" href="descarga.jpg" class="link-cv">Descargar CV</a>
    </div>
</section>






    
      </section>

      <section id="estudios">
        <h2 class="titulo-estudios"></h2>
        
        <Estudios />
      </section>

      <section id="softskills">
        <h2></h2>
        <SoftSkills />
      </section>

      <section id="skills">
        <h2></h2>
        <Skills />
      </section>




      <section id="proyectos">
      <Proyectos />
      </section>

      <section id="experiencia">
  <h2>💼 Experiencia Laboral</h2>
  <div className="experiencia-cards">

    <div className="card">
      <FaBriefcase className="icono-trabajo" />
      <h3>Desarrolladora Frontend Jr.</h3>
      <p className="empresa">Tech Solutions S.A.</p>
      <p className="fecha"><FaCalendarAlt /> Feb 2023 - Ene 2024</p>
      <ul>
        <li>Interfaces responsivas con React y Tailwind.</li>
        <li>Mejoras en la experiencia de usuario.</li>
        <li>Trabajo en equipo con metodología Scrum.</li>
      </ul>
    </div>

    <div className="card">
      <FaBriefcase className="icono-trabajo" />
      <h3>Pasante en Desarrollo Web</h3>
      <p className="empresa">CodeFactory</p>
      <p className="fecha"><FaCalendarAlt /> Jul 2022 - Dic 2022</p>
      <ul>
        <li>Soporte y mantenimiento de sitios web.</li>
        <li>Mejoras visuales y de funcionalidad.</li>
        <li>Colaboración con el equipo usando GitHub.</li>
      </ul>
    </div>

  </div>
</section>

    
<section>
  <h2><FaLanguage /> Idiomas</h2>
  <div className="idioma-card">
    <h3>Inglés</h3>
    <p>Básico</p>
    <div className="barra-nivel">
      <div className="nivel lleno"></div>
      <div className="nivel"></div>
      <div className="nivel"></div>
    </div>
  </div>
</section>

<section id="certificados">
  <h2>🎓 Certificados</h2>
  <div className="certificados-grid">

    <div className="certificado-card">
    <img src="/assets/certificado.png" alt="Certificado de FreeCodeCamp" />
      <p>Diseño Web Adaptable - FreeCodeCamp </p>
    </div>

    <div className="certificado-card">
    <img src="/assets/certificado2.png" alt="Certificado de alurat" />
      <p>Logica de Programación - ALURA LATAM</p>
    </div>

    <div className="certificado-card">
      <img src="/assets/certificadoo3.png" alt="Certificado de Scrum" />
      <p> Imagen de certificado- CertiProf</p>
    </div>

  </div>
</section>
    </main>
  );
}

export default Main;

