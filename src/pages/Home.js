import React from "react";
import '../App.css';
import Landing from "../components/Landing";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Generate from "../components/Generate";
import { Carousel } from "react-bootstrap";
import Neck from "../C-pics/ed1e12ca-4863-4828-beac-b510e5445770.png";
import Ring from "../C-pics/d81bc3ef-a2d5-41be-ab14-5022347b9933.png";
import Bangle from "../C-pics/fac6fab6-3d48-4366-8458-6335f96a96be.png";
import Brooch from "../C-pics/brooch.jpeg"

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
};

const Home = () => {
  return (
    <div>
      <div className="ebox">
        <Slider {...settings}>
          <div className="ebox">
            <Landing />
          </div>
          <div className="eboxTwo">
            <div className="forSlider">
              <Carousel fade>
                <Carousel.Item><div className="container-fluid " style={{ minHeight: "100vh" }}>
                  <center><img src={Neck} style={{ minHeight: "100vh" }} alt="Necklace"/></center>
                  <Carousel.Caption>
                    <span className="text-primary"><h3>Necklace</h3></span>
                  </Carousel.Caption></div>
                </Carousel.Item>
                <Carousel.Item><div className="container-fluid" style={{ minHeight: "100vh" }}>
                  <center><img src={Ring} style={{ minHeight: "100vh" }} alt="Ring"/></center>
                  <Carousel.Caption>
                    <span className="text-warning"><h3>Rings</h3></span>
                  </Carousel.Caption></div>
                </Carousel.Item>
                <Carousel.Item><div className="container-fluid" style={{ minHeight: "100vh" }}>
                  <center><img src={Bangle} style={{ minHeight: "100vh" }} alt="Bangle"/></center>
                  <Carousel.Caption>
                    <span className="text-warning"><h3>Bangles and Bracelets</h3></span>
                  </Carousel.Caption></div>
                </Carousel.Item>
                <Carousel.Item><div className="container-fluid " style={{ minHeight: "100vh" }}>
                  <center><img src={Brooch} style={{ minHeight: "100vh" }} alt="Brooch"/></center>
                  <Carousel.Caption>
                    <span className="text-dark"><h3>Mangalsutras, Brooches, and more</h3></span>
                  </Carousel.Caption></div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="ebox">
            <Generate />
          </div>
        </Slider>
      </div>
    </div>
  )
};

export default Home;