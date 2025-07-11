import React, { useEffect, useState } from 'react';
import logo from '../assets/logos/logo-nobg.png';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      let current = '';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 100) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="header-nav">
      <img
        src={logo}
        alt="Logo"
        className="header-logo"
        onClick={() => scrollToSection('home')}
        style={{ cursor: 'pointer' }}
      />
      <div className="nav-links">
        <button
          onClick={() => scrollToSection('home')}
          className={activeSection === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('services')}
          className={activeSection === 'services' ? 'active' : ''}
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className={activeSection === 'about' ? 'active' : ''}
        >
          About Us
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className={activeSection === 'contact' ? 'active' : ''}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Header;
