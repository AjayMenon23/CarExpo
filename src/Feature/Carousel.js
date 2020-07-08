import React from 'react';
import Slider from "react-slick";
import ferrari from '../resources/images/ferrari.jpg';
import lambo from '../resources/images/lambo.jpg';
import bike from '../resources/images/bike.jpeg';
import Countdown from './Countdown'
const Carousel = (props) => {


	var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1	
    };


  return (
    <div className="carrousel_wrappper"
   		style={{
    	overflow : 'hidden', 
    	height:`${window.innerHeight}px`,
            width:`${window.innerWidth}px`

    	}}>

        <Slider {...settings}>
        <div>
        	<div className="carrousel_image"
        		 style={{
        		 	background: `url(${(ferrari)})`,
              backgroundRepeat: 'noRepeat',
        		 	height:`${window.innerHeight}px`,
              width:`${window.innerWidth}px`

        		 }}>
        	</div>
        </div>
        
        <div>
        <div className="carrousel_image"
        		 style={{
        		 	background: `url(${(lambo)})`,
        		  height:`${window.innerHeight}px`,
              backgroundRepeat: 'noRepeat',
              width:`${window.innerWidth}px`

        		 }}>
        	</div>
        </div>
       
        <div>
         <div className="carrousel_image"
        		 style={{
        		 	background: `url(${(bike)})`,
              backgroundRepeat: 'noRepeat',
        		 	height:`${window.innerHeight}px`,
              width:`${window.innerWidth}px`


        		 }}>
        	</div>
        </div>
        </Slider>

        <Countdown/>

    </div>



  )
}

export default Carousel;