import { ICONS } from '../../constants/icons';
import styles from './Food.scss';

import React, { useState } from 'react';

const ImageCarousel = ({ foodImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 4;

  const nextImages = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (foodImages.length - imagesToShow + 1));
  };

  const prevImages = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + (foodImages.length - imagesToShow + 1)) % (foodImages.length - imagesToShow + 1),
    );
  };

  return (
    <div className="food-carousel d-flex align-items-centers ">
      <button onClick={prevImages}>
        <img className="height-100" src={ICONS.arrow_left} alt="arrow left" />
      </button>
      <div className="items-container">
        {foodImages.slice(currentIndex, currentIndex + imagesToShow).map((foodImage, index) => (
          <div className="food-item" key={index}>
            <img style={{ height: '80px' }} src={foodImage} alt={foodImage.name} />
          </div>
        ))}
      </div>
      <button onClick={nextImages}>
        <img className="height-100" src={ICONS.arrow_right} alt="arrow right" />
      </button>
    </div>
  );
};

export default ImageCarousel;
