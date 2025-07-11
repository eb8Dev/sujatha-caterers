import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MenuPage.css';
import logo from '../assets/logos/logo-nobg.png';
import PackageSelector from '../components/PackageSelector';
import MealTypeSelector from '../components/MealTypeSelector';
import BreakfastMenu from '../components/MenuDisplay/BreakfastMenu';
import LunchDinnerMenu from '../components/MenuDisplay/LunchDinnerMenu';
import { MENU } from '../data/menuData';


const MenuPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const isActive = (path) => location.pathname === path;

    const [selectedPackage, setSelectedPackage] = useState('Basic');
    const [selectedMealType, setSelectedMealType] = useState('Breakfast');

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
                    <button className={isActive('/services') ? 'active' : ""} onClick={() => handleNavigate('/services')}>Services</button>
                    <button className={isActive('/about') ? 'active' : ""} onClick={() => handleNavigate('/about')}>About Us</button>
                    <button onClick={() => handleNavigate('/contact')}>Contact Us</button>
                </div>
            </nav>

            <section className="menu-content">
                <h1>Our Menu</h1>
                <div>
                    <MealTypeSelector
                        selectedMealType={selectedMealType}
                        onSelect={setSelectedMealType}
                    />

                    <PackageSelector
                        selectedPackage={selectedPackage}
                        onSelect={setSelectedPackage}
                    />
                </div>
                <div>
                    {/* scrollable brekfast menus */}
                    {selectedMealType === 'Breakfast' ? (
                        MENU.breakfast ? (
                            <BreakfastMenu
                                menuData={MENU.breakfast}
                                selectedPackage={selectedPackage}
                            />
                        ) : (
                            <p>Breakfast menu is not available at the moment.</p>
                        )
                    ) : selectedMealType === 'Lunch' ? (
                        MENU.lunchDinner ? (
                            <LunchDinnerMenu
                                menuData={MENU.lunchDinner}
                                selectedMealType={selectedMealType}
                                selectedPackage={selectedPackage}
                            />
                        ) : (
                            <p>Lunch menu is not available at the moment.</p>
                        )
                    ) : selectedMealType === 'Dinner' ? (
                        MENU.lunchDinner ? (
                            <LunchDinnerMenu
                                menuData={MENU.lunchDinner}
                                selectedMealType={selectedMealType}
                                selectedPackage={selectedPackage}
                            />
                        ) : (
                            <p>Dinner menu is not available at the moment.</p>
                        )
                    ) : (
                        <p>Please select a valid meal type.</p>
                    )}
                </div>

            </section>
        </div>
    );
};

export default MenuPage;
