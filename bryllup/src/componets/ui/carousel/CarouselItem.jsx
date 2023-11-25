import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselItem = ({ imagePath, itemDescription }) => {
  return (
    <Carousel.Item>
      <img src={"../assets/bannerphoto.svg"} alt={itemDescription} />
    </Carousel.Item>
  );
};

export default CarouselItem;
