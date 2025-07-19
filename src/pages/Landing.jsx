import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import Header from '../components/Header';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const Home = () => {
  const navigate = useNavigate();
  const [visitCount, setVisitCount] = useState(null);
  const [user, setUser] = useState(null);
  const [showCookiePrompt, setShowCookiePrompt] = useState(false);

  useEffect(() => {
    // Load user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }

    // Handle cookie permission
    const consent = Cookies.get('cookie_consent');
    const alreadyVisited = Cookies.get('already_visited');

    if (!consent) {
      setShowCookiePrompt(true); // Ask for permission
    } else {
      if (!alreadyVisited) {
        fetch('/api/visit', { method: 'POST' }) // Count visit once
          .then(res => res.json())
          .then(data => {
            setVisitCount(data.count);
            Cookies.set('already_visited', 'true', { expires: 7 });
          })
          .catch(err => console.error('Failed to increment visit', err));
      } else {
        fetch('/api/visit')
          .then(res => res.json())
          .then(data => setVisitCount(data.count))
          .catch(err => console.error('Failed to fetch visit count', err));
      }
    }
  }, []);

  const handleViewMenu = () => {
    navigate('/menu');
  };

  const acceptCookies = () => {
    Cookies.set('cookie_consent', 'true', { expires: 365 });
    setShowCookiePrompt(false);
    window.location.reload(); // Trigger count increment
  };

  const rejectCookies = () => {
    toast.warn('You must accept cookies for full functionality.');
    setShowCookiePrompt(false); // Hide for now, will show again on next visit
  };

  return (
    <div className="home">
      <Header />

      <section className="home-content">
        {user && <h2 className="welcome-message">Welcome, {user.name} 👋</h2>}

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
          <p>Loading visit count...</p>
        )}
      </footer>

      {/* Cookie consent prompt */}
      {showCookiePrompt && (
        <div className="cookie-box">
          <p>This site uses cookies to enhance your experience. Do you accept?</p>
          <div className="cookie-actions">
            <button onClick={acceptCookies}>Accept</button>
            <button onClick={rejectCookies}>Reject</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
