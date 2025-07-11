import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Landing.css';
import logo from '../assets/logos/logo-nobg.png';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [visitCount, setVisitCount] = useState(null);

  const isActive = (path) => location.pathname === path;

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // close menu on navigation
  };

  const handleViewMenu = () => {
    navigate('/menu');
  };

  useEffect(() => {
    fetch('/api/visit')
      .then(res => res.json())
      .then(data => {
        setVisitCount(data.count);
      })
      .catch(err => console.error('Failed to load visit count', err));
  }, []);

  return (
    <div className="home">
      <nav className="header-nav">
        <img
          src={logo}
          alt="Logo"
          className="header-logo"
          onClick={() => handleNavigate('/')}
          style={{ cursor: 'pointer' }}
        />

        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <button className={isActive('/') ? 'active' : ''} onClick={() => handleNavigate('/')}>Home</button>
          <button onClick={() => handleNavigate('/services')}>Services</button>
          <button onClick={() => handleNavigate('/about')}>About Us</button>
          <button onClick={() => handleNavigate('/contact')}>Contact Us</button>
        </div>
      </nav>

      <section className="home-content">
        <h1 className="home-title">Sujatha Caterers</h1>
        <h3 className="home-tagline">
          Not Just Food, But a Feast of — Crafted with Love, Served with Tradition.
        </h3>
        <p className="home-description">
          Discover the rich heritage of Indian cuisine brought to life by Sujatha Caterers. From grand weddings to intimate gatherings, we deliver unforgettable culinary experiences with authentic South and North Indian dishes. Each plate is a celebration — of culture, flavor, and heartfelt hospitality.
        </p>
        <button className="cta-button" onClick={handleViewMenu}>
          Explore Our Menu
        </button>
      </section>

      <footer className="visit-counter">
        {visitCount !== null ? (
          <p>This page has been visited <strong>{visitCount}</strong> times</p>
        ) : (
          <p>Long visit count...</p>
        )}
      </footer>
    </div>
  );
};

export default Home;
