import React, { FC, useState } from 'react';
import './index.css';
import prev from '../../assets/icons/prev-icon.png';
import next from '../../assets/icons/next-icon.png';
import { carouselDataProps } from '../../interface';
import Button from '../button';

const Carousel: FC<carouselDataProps> = ({ carouselData }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const nextSlide = () => {
    currentSlideIndex === carouselData.length - 1
      ? setCurrentSlideIndex(0)
      : setCurrentSlideIndex(currentSlideIndex + 1);
  };
  const prevSlide = () => {
    currentSlideIndex === 0
      ? setCurrentSlideIndex(carouselData.length - 1)
      : setCurrentSlideIndex(currentSlideIndex - 1);
  };
  return (
    <div className='carousel-container'>
      <Button src={prev} clickFunction={prevSlide} />
      <img
        className='carousel-image'
        src={carouselData[currentSlideIndex].url}
        alt={carouselData[currentSlideIndex].alt}
      />
      <Button src={next} clickFunction={nextSlide} />
    </div>
  );
};

export default Carousel;
