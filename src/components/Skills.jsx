import React from 'react';
import '../styles/App.css';

function Skills() {
  const skills = [
    { nombre: 'JavaScript', icono: '🟨' },
    { nombre: 'React', icono: '⚛️' },
    { nombre: 'HTML & CSS', icono: '🌐' },
    { nombre: 'Git & GitHub', icono: '🐙' },
    { nombre: 'SQL', icono: '🗄️' },
    { nombre: 'Node.js', icono: '🟩' },
    { nombre: 'C#', icono: '🔷' },
  ];

  return (
    <div className="skills-container">
      <h2>🛠️ Skills</h2>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>
            <span className="icon">{skill.icono}</span> {skill.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
