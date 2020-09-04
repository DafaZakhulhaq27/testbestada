import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import './slider.css';  

class SliderBanner extends Component {  
    render() {  
        var settings = {  
          dots: true,  
          infinite: true,  
          speed: 500,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 1  
          };  
          return (  
            <div>  
                <div className='container' >        
                    <Slider {...settings} >  
                        <div className="wdt">  
                            <img  className="img" src= {require('./1.jpg')} className="img"/>  
                        </div>  
                        <div className="wdt">  
                        <img  className="img" src= {require('./2.jpg')} className="img"/>  
                        </div>  
                        <div className="wdt">  
                        <img  className="img" src= {require('./3.jpg')} className="img"/>  
                        </div>  
                    </Slider>  
                </div>  
            </div>  
          );  
        }  
      }  
  
export default SliderBanner 