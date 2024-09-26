import React from 'react'
import Slider from 'react-slick'
import men from './../../assets/men.png'
import beg from './../../assets/beg.png'
import women from './..//../assets/women.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Hero.css'
function Hero() {

    const  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true ,
    autoplaySpeed : 2500
  };
  return (
    <div>
      <Slider  {...settings}>
<div>
    <img src={men}/>
</div>
<div>
    <img src={beg}/>
</div>
<div>
    <img src={women}/>
</div>
      </Slider>
    </div>
  )
}

export default Hero
