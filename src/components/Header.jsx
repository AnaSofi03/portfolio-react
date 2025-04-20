import React from 'react';
import foto from '../assets/imagen1.jpeg'; // importo la imagen //foto es el alias
function Header() {
  return (
    <header className="header">
 <img src={foto} alt="Foto de perfil" className="foto-perfil" /> 
      <h1>Guerrero Ana</h1>
      <p> Legajo: 61120</p>
      
    </header>
  );
}


export default Header;