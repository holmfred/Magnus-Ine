import Carousel from 'react-bootstrap/Carousel';
import Banner from './../../../assets/Banner.png';

function MainCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={10000}>
        <img src={Banner} alt='Vi gleder oss veldig!' className='carousel-img'/>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={Banner} alt='Hype' className='carousel-img' />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;