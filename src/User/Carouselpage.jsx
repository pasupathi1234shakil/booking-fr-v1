import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './movie1.jpg'
import img2 from './movie2.jpg'
import img3 from './movie3.jpg'


const Carouselpage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img style={{ height: '60vh', width: '100vh' }}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>ENJOY THE IPL MATCHES</h3>
            {/* <p>CSK V/S RCB</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img style={{ height: '60vh', width: '100vh' }}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>EXPERIENCE WORLD OF MARVEL</h3>
            <p>AVENGERS ASSEMBLE</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img style={{ height: '60vh', width: '100vh' }}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>WHO WILL KNOW THE LEO</h3>
            <p>LEO MOVIE</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carouselpage