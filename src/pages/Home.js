import React from "react";
import '../App.css';
import Landing from "../components/Landing";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Generate from "../components/Generate";

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
          <div className="ebox">
            <h1>Horizontal carousal here</h1>
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