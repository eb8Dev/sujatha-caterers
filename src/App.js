import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import MenuPage from './pages/MenuPage';
import Services from './pages/Services';
import About from './pages/AboutUs';
import ContactUs from './pages/ContacUs';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/menu" element={<MenuPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
