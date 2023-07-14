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
    accessibility:true,
    autoplay:true,
    autoplaySpeed:2500,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable:false
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
            <Slider {...CategoriesSettings}>
              <div className="cbox">
                <h1>Necklace</h1>
              </div>
              <div className="cbox">
                <h1>Rings</h1>
              </div>
              <div className="cbox">
                <h1>Bracelet & Bangles</h1>
              </div>
              <div className="cbox">
                <h1>Mangalsutra & Brooch & Kundan and more...</h1>
              </div>
            </Slider>
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