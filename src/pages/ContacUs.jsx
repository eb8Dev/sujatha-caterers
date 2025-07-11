import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ContactUs.css';
import logo from '../assets/logos/logo-nobg.png';
import { FaPhoneAlt, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const handleNavigate = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

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
                    <button onClick={() => handleNavigate('/')}>Home</button>
                    <button className={isActive('/services') ? 'active' : ''} onClick={() => handleNavigate('/services')}>Services</button>
                    <button className={isActive('/about') ? 'active' : ''} onClick={() => handleNavigate('/about')}>About Us</button>
                    <button className={isActive('/contact') ? 'active' : ''} onClick={() => handleNavigate('/contact')}>Contact Us</button>
                </div>
            </nav>

            <section className="contact-hero">
                <h1>We’d Love to Hear From You!</h1>
                <p>
                    Whether you're planning a wedding, a festive gathering, or a corporate event, Sujatha Caterers is here to bring your vision to life with exquisite South Indian vegetarian cuisine.
                    Our team is warm, responsive, and ready to assist you with menu planning, pricing, and availability.
                </p>
            </section>

            <section className="contact-details">
                <div className="contact-box">
                    <FaPhoneAlt className="contact-icon" />
                    <h3>Phone</h3>
                    <p><a href="tel:+919999999999">+91 99999 99999</a></p>
                    <p>Available 24/7</p>
                </div>

                <div className="contact-box">
                    <FaWhatsapp className="contact-icon" />
                    <h3>WhatsApp</h3>
                    <p><a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">Chat Now</a></p>
                    <p>Instant Support</p>
                </div>

                <div className="contact-box">
                    <FaEnvelope className="contact-icon" />
                    <h3>Email</h3>
                    <p><a href="mailto:contact@sujathacaterers.com">contact@sujathacaterers.com</a></p>
                    <p>Replies within 12 hours</p>
                </div>

                <div className="contact-box">
                    <FaClock className="contact-icon" />
                    <h3>Business Hours</h3>
                    <p>Monday – Sunday</p>
                    <p>8:00 AM – 9:00 PM</p>
                    <p className='info'>Applicable to Meal Box</p>
                </div>

                <div className="contact-box">
                    <FaMapMarkerAlt className="contact-icon" />
                    <h3>Address</h3>
                    <p>Brodipet, Guntur</p>
                    <p>Open in Maps Below</p>
                </div>

                <div className="contact-box social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com/sujathacaterers" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://instagram.com/sujathacaterers" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://twitter.com/sujathacaterers" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1504.9426618398013!2d80.43374424917873!3d16.307308162705976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a750076016751%3A0x67e7ea578cedc17b!2sSri%20Vasudha%20Tech!5e1!3m2!1sen!2sin!4v1752240130337!5m2!1sen!2sin"
                    width="50%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sujatha Caterers Map"
                ></iframe>
            </section>
        </div>
    );
};

export default ContactUs;
