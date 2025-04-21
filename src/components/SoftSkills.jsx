import React from 'react';
import { Smile, Users, Activity, ThumbsUp, Heart } from 'lucide-react';

const skills = [
  { icon: <Smile size={24} />, label: 'Empatía' },
  { icon: <Users size={24} />, label: 'Trabajo en equipo' },
  { icon: <Activity size={24} />, label: 'Adaptabilidad' },
  { icon: <ThumbsUp size={24} />, label: 'Proactividad' },
  { icon: <Heart size={24} />, label: 'Pasión por aprender' },
];

function SoftSkills() {
  return (
    <section className="softskills-section">
      <h2>🧠 Soft Skills</h2>
      <p>Lo que me define más allá del código</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon">{skill.icon}</div>
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SoftSkills;

