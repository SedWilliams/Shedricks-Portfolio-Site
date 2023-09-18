import React from 'react';
import '../styles/PortfolioGrid.css';

const PortfolioGrid = () => {
  const imageUrls = [
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
  ];

  const renderGridItems = () => {
    return imageUrls.map((imageUrl, index) => (
      <div className="grid-item" key={index}>
        <div className="image-container">
          <img src={imageUrl} alt={`Project ${index}`} />
        </div>
      </div>
    ));
  };

  return (
    <a id="portfolio-grid">
          <div className="portfolio-grid">
            {renderGridItems()}
          </div>
    </a>
  );
};

export default PortfolioGrid;
