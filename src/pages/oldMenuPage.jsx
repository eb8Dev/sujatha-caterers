import React, { useState } from 'react';
import PackageSelector from '../components/PackageSelector';
import MealTypeSelector from '../components/MealTypeSelector';
import BreakfastMenu from '../components/MenuDisplay/BreakfastMenu';
import LunchDinnerMenu from '../components/MenuDisplay/LunchDinnerMenu';
import { MENU } from '../data/menuData';
import './MenuPage.css'; // Import the CSS

const MenuPage = () => {
  const [selectedPackage, setSelectedPackage] = useState('Basic');
  const [selectedMealType, setSelectedMealType] = useState('Breakfast');

  return (
    <div className="menu-page-container">
      <div className="menu-layout">
        {/* Left selectors */}
        <div>
          <h1>Sujatha Caterers Menu</h1>
          <div className="menu-selectors">
            <PackageSelector
              selectedPackage={selectedPackage}
              onSelect={setSelectedPackage}
            />
            <MealTypeSelector
              selectedMealType={selectedMealType}
              onSelect={setSelectedMealType}
            />
          </div>
        </div>

        {/* Right menus */}
        <div className="menu-display">
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
      </div>
    </div>
  );
};

export default MenuPage;
