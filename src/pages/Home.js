import React from "react";
import '../App.css';
import Landing from "../components/Landing";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
        <div className="forcou ">
        <Slider {...settings}>
          <div className="forcou" style={{height: "100%"}}>
            <Landing />
          </div>
          <div className="forcou">
            <h1>2</h1>
          </div>
        </Slider>
        </div>
        </div>
    )
};

export default Home;