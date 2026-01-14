import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img
            src="/neo-indian-exports-logo.png"
            alt="Neo Indian Exports Logo"
            className="logo"
          />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#exports">Exports</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
