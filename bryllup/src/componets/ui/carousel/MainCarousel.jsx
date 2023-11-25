import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from './CarouselItem';

function MainCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <CarouselItem imagePath={"../../assets/bannerphoto.svg"} itemDescription={"Vi gleder oss veldig!"}  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <CarouselItem  imagePath={"../assets/bannerphoto.svg"} itemDescription={"Hype!"} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;