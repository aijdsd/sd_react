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

const CategoriesSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
            <Slider {...CategoriesSettings}>
              <div className="cbox">
                <h1>category 1</h1>
              </div>
              <div className="cbox">
                <h1>category 2</h1>
              </div>
              <div className="cbox">
                <h1>category 3</h1>
              </div>
            </Slider>
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