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
import char_shoes from '../assets/char+shoes.jpg';
import char_evan from '../assets/char+evan.jpg';
import palm_ring from '../assets/palm_ring.jpg';


class PhotoGallery extends React.Component{
    
    render(){

        var settings = {  
            dots: true,  
            infinite: true,  
            speed: 1000,   
            slidesToShow: 1,  
            slidesToScroll: 1,  
            arrows: true,
            centerMode: true,
            variableWidth: true,
            };  

        

        return (  
            
            <div>  
                <Navigation currActive={"photo"}/>
                
                <div class='slideshow-container'>           
                    <Slider class="slider" {...settings} >  
                        <div className="wdt">  
                            <img className="img-vertical" src={char_evan} alt="char+evan"/>  
                            <p className="img-desc"><a href="https://www.instagram.com/_suminchoi/?hl=en" rel="noopener noreferrer" target="_blank">Sumin Choi</a></p>
                        </div>

                        <div className="wdt">  
                            <img className="img" src={ella_char} alt="charlie"/>
                            <p className="img-desc">Charlie and Ella</p>
                        </div>  
                        <div className="wdt">  
                            <img className="img" src={kith_con} alt="converse"/> 
                            <p className="img-desc">Kith x Cocacola Converse 2019</p> 
                        </div>  
                        <div className="wdt">  
                            <img className="img" src={coachella_tower} alt="coachella"/>  
                            <p className="img-desc">Coachella 'Spectra' Art Piece (2019)</p>
                        </div>  
                        <div className="wdt">  
                            <img className="img" src={under_pier} alt="under pier"/>  
                            <p className="img-desc">Underside of Seal Beach Pier</p>
                        </div>      

                        
                        <div className="wdt">  
                            <img className="img-vertical" src={palm_ring} alt="palm ring"/>  
                            <p className="img-desc">Seal Beach Palm Ring</p>
                        </div>
                        <div className="wdt">  
                            <img className="img" src={char_shoes} alt="char+shoes"/>  
                            Charlie and AF1 Swoosh Pack <a href="https://www.instagram.com/_suminchoi/?hl=en" rel="noopener noreferrer" target="_blank">PC: Sumin Choi</a>
                        </div> 
                    </Slider>  
                </div>

                <Social/>

            </div>  
        ); 
    }
    
};



export default PhotoGallery;