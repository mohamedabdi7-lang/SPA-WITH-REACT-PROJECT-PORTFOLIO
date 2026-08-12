import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Asensio Creative Studio</h1>
        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;