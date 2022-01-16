import React from "react";
import "../assets/stylesheets/App.css"

import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  

import Navigation from '../visible/Navigation';
import Social from '../visible/Social';

import ella_char from '../assets/images/ella_charlie.jpeg';
import under_pier from '../assets/images/under_pier.jpeg';
import kith_con from '../assets/images/kith_coca_con.jpeg';
import coachella_tower from '../assets/images/coachella_tower.jpeg';
import char_shoes from '../assets/images/char+shoes.jpg';
import char_evan from '../assets/images/char+evan.jpg';
import palm_ring from '../assets/images/palm_ring.jpg';


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
            variableHeight: false,
            centerPadding: '0px',
     
            responsive: [
                {
                breakpoint: 710,
                settings: {
                    centerMode: true,
                    variableWidth: true,
                }
                },
            ]
        };  

        

        return (  
            
            <div>  
                <Navigation currActive={"photo"}/>
                
                <div class='slideshow-container'>           
                    <Slider class="slider" {...settings} >  
                        
                        <div className="photo-slide">  
                            <img className="horizontal" src={char_shoes} alt="char+shoes"/>  
                            <p className="img-desc horizontal">Charlie {'&'} AF1 Swoosh Pack <br/>Photo by <a href="https://www.instagram.com/_suminchoi/?hl=en" rel="noopener noreferrer" target="_blank">Sumin Choi</a></p>
                        </div>

                        <div className="photo-slide">  
                            <img className="vertical" src={char_evan} alt="char+evan"/>  
                            <p className="img-desc vertical">Photo by <a href="https://www.instagram.com/_suminchoi/?hl=en" rel="noopener noreferrer" target="_blank">Sumin Choi</a></p>
                        </div>
        
                        <div className="photo-slide">  
                            <img className="horizontal" src={ella_char} alt="charlie"/>
                            <p className="img-desc horizontal">Charlie and Ella</p>
                        </div>  

                        <div className="photo-slide">  
                            <img className="horizontal" src={kith_con} alt="converse"/> 
                            <p className="img-desc horizontal">Kith x Cocacola Converse 2019</p> 
                        </div> 

                        <div className="photo-slide">  
                            <img className="horizontal" src={coachella_tower} alt="coachella"/>  
                            <p className="img-desc horizontal">Coachella 'Spectra' Art Piece (2019)</p>
                        </div>  

                        <div className="photo-slide">  
                            <img className="horizontal" src={under_pier} alt="under pier"/>  
                            <p className="img-desc horizontal">Underside of Seal Beach Pier</p>
                        </div>      
                        
                        <div className="photo-slide">  
                            <img className="vertical" src={palm_ring} alt="palm ring"/>  
                            <p className="img-desc vertical">Seal Beach Palm Ring <br/> Photo by <a href="https://www.instagram.com/_suminchoi/?hl=en" rel="noopener noreferrer" target="_blank">Sumin Choi</a></p>
                        </div>
                        
                    </Slider>  
                </div>

                <Social/>

            </div>  
        ); 
    }
    
};



export default PhotoGallery;