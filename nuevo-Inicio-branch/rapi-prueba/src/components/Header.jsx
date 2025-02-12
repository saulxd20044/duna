import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handlePersonaClick = () => {
    navigate('/persona');
  };

  return (
    <header className={`header ${isNavOpen ? 'active' : ''}`}>
      <div className="container">
        <button 
          className="nav-toggle-btn" 
          aria-label="toggle menu" 
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <ion-icon name={isNavOpen ? "close-outline" : "menu-outline"} aria-hidden="true" />
        </button>

        <a href="#" className="logo">RAPI MONEY</a>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#shop" className="navbar-link" onClick={handleNavLinkClick}>Servicios</a>
            </li>
            <li className="navbar-item">
              <a onClick={handlePersonaClick} className="navbar-link" style={{cursor: 'pointer'}}>Persona</a>
            </li>
            <li className="navbar-item">
              <a href="#footer" className="navbar-link" onClick={handleNavLinkClick}>Contacto</a>
            </li>
          </ul>
          <div className="caja-iniciar">
            <div className="caja-iniciar-sesion">
              <button onClick={handleLoginClick}>
                Iniciar sesión
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;