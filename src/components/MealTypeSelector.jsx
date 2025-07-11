import React from 'react';
import './MealTypeSelector.css'; // Optional styles

const mealTypes = ['Breakfast', 'Lunch', 'Dinner'];

const MealTypeSelector = ({ selectedMealType, onSelect }) => {
  return (
    <div className="meal-type-selector">
      <h3>Meal Type</h3>
      <div className="meal-buttons">
        {mealTypes.map((meal) => (
          <button
            key={meal}
            className={meal === selectedMealType ? 'active' : ''}
            onClick={() => onSelect(meal)}
          >
            {meal}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MealTypeSelector;
