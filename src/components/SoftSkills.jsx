import React from 'react';

function SoftSkills() {
  const skills = ['Trabajo en equipo', 'Responsabilidad', 'Comunicación efectiva','Trabajo bajo presión', 'Adaptabilidad', 'Resolución de problemas'];

  return (
    <ul>
      {skills.map((skill, i) => (
        <li key={i}>{skill}</li>
      ))}
    </ul>
  );
}

export default SoftSkills;