import React from 'react';
import DishCard from './MenuDisplay/DishCard'; // adjust path if needed

const InclusionsList = ({ inclusions, mealType }) => {
  if (!inclusions || inclusions.length === 0) return null;

  return (
    <div style={{ marginTop: '30px' }}>
      <h3>Complimentary/Inclusions with {mealType} Package:</h3>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          marginTop: '12px',
        }}
      >
        {inclusions.map((item, idx) => {
          if (typeof item === 'string') {
            return (
              <div
                key={idx}
                style={{
                  fontSize: '16px',
                  padding: '6px 12px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '6px',
                  whiteSpace: 'nowrap',
                }}
              >
                {item}
              </div>
            );
          } else if (typeof item === 'object' && item.name) {
            return (
              <div key={idx} style={{ minWidth: '200px' /* adjust as needed */, flex: '1 0 auto' }}>
                <DishCard
                  name={item.name}
                  packages={item.packages || []}
                  selectedPackage=""
                  image={item.image}
                />
              </div>
            );
          } else {
            return (
              <div key={idx} style={{ fontSize: '16px' }}>
                {JSON.stringify(item)}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default InclusionsList;
