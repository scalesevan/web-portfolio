import React from "react";
import "../App.css"

import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  

import Navigation from '../Navigation';
import Social from '../Social';

import ella_char from '../assets/ella_charlie.jpeg';
import under_pier from '../assets/under_pier.jpeg';
import kith_con from '../assets/kith_coca_con.jpeg';
import coachella_tower from '../assets/coachella_tower.jpeg';


class PhotoGallery extends React.Component{
    
    render(){

        var settings = {  
            dots: true,  
            infinite: true,  
            speed: 1000,   
            slidesToShow: 1,  
            slidesToScroll: 1,  
            arrows: true,
            };  

        return (  
            
            <div>  
                <Navigation currActive={"photo"}/>
                
                <div class='slideshow-container'>           
                    <Slider {...settings} >  
                        <div className="wdt">  
                            <img className="img" src={ella_char} alt="charlie"/>  
                        </div>  
                        <div className="wdt">  
                            <img className="img" src={kith_con} alt="converse"/>  
                        </div>  
                        <div className="wdt">  
                            <img className="img" src={coachella_tower} alt="coachella"/>  
                        </div>  
                        <div className="wdt">  
                            <img className="img" src={under_pier} alt="under pier"/>  
                        </div>       
                    </Slider>  
                </div>

                <Social/>

            </div>  
        ); 
    }
    
};



export default PhotoGallery;