import React from "react";
import "../App.css"

import Navigation from '../Navigation';
import Social from '../Social';

import ucsd from '../assets/UCSD_Seal.png';
import habitat from '../assets/habitat_icon.png';
import website from '../assets/website.png';
import swim from '../assets/swim.png';
import dj from '../assets/dj.png';
import sneaker from '../assets/sneaker.png';

function About() {
    
    return (  
        
        <div>  

            <Navigation currActive={"about"}/>

            <div class="about-container">

                <h2 class="me">About Me</h2>

                <div class="about-me">
                    <img class="icon" src={ucsd} alt="UCSD"/>
                    <div class="desc">
                            <span class="desctitle"><b>University of California San Diego</b></span>
                            <br></br>
                            <span class="desctime">Class of 2022</span>
                            <br></br>
                            <div class="descinfo">
                                <p>I am a third year student at UCSD studying Computer Science. I dream of one day working in the music industry to combine the powers of music and technology.</p>
                                <p>To get to know more about me you can see some photos that I take or the music that I listen to on Spotify.</p>
                            </div>
                    </div>
                </div> 

                <br/>
                <h2>Experience</h2>

                {/*
                <table class="about-table">
                    <tbody>
                        <tr>
                            <td>
                                <img class="icon" src={habitat} alt="Habitat App"/>
                            </td>

                            <td class="table-desc">
                                <h3>
                                    Habitat App
                                </h3>
                            
                                    <li>Created a React Native Android Application</li>
                                    <li>This application is for habit forming with friends by completeing tasks to earn currency to buy items for your virtual pet </li>
                                    <li>Integrated with MongoDB and Express</li>
                                    <li>Skills: HTML, Javascript, Databases</li>                                
                            </td>
                        </tr>
                    </tbody>
                </table> */}

                <div class="about-me">
                    <img class="icon" src={habitat} alt="Habitat App"/>
                    <div class="desc">
                            <span class="desctitle"><b>Habitat App</b></span>
                            <br></br>
                            <span class="desctime">Spring 2020</span>
                            <br></br>

                            <div class="descinfo">
                                <li>Created a React Native Android Application</li>
                                <li>This application is for habit forming with friends by completeing tasks to earn currency to buy items for your virtual pet </li>
                                <li>Integrated with MongoDB and ExpressJS</li>
                                <li><b>Skills Used:</b> HTML, Javascript, Databases</li> 
                            </div>
                    </div>
                </div> 

                <h2>Projects</h2>  
                <div class="about-me">
                    <img class="icon" src={website} alt="Website"/>
                    <div class="desc">
                            <span class="desctitle"><b>This Website</b></span>
                            <br></br>
                            <span class="desctime">Summer 2020</span>
                            <br></br>

                            <div class="descinfo">
                                <li>Developed with React JS using Routing components.</li>
                                <li><b>Skills Used:</b> HTML, Javascript, CSS, React JS</li> 
                            </div>
                    </div>
                </div> 

                <h2>Hobbies</h2>
                
                <div class="hobbies">
                    <div class="hobby">
                        <img class="hobby-icon" src={swim} alt="Swim"/>
                        <p class="desctitle"><b>Swim</b></p>
                        <p>I have been swimming since I was 8 years old and have continued until the present. I have been part of Golden West Swim club and the UCSD Swim Club as a 100 and 200 backstroke swimmer.</p>
                    </div>

                    <div class="hobby">
                        <img class="hobby-icon" src={dj} alt="dj"/>
                        <p class="desctitle"><b>DJ</b></p>
                        <p>I began Djing with the UCSD Deejays {"&"} Vinylphiles Club in 2018. As a current member I have been part of event production and performance.</p>
                    </div>

                    <div class="hobby">
                        <img class="hobby-icon" src={sneaker} alt="sneaker"/>
                        <p class="desctitle"><b>Sneakers</b></p>
                        <p>With one of my best friends, in high school I entered the world of sneakers where I became a sneakerhead. I buy, sell, and collect all types of sneakers... it may be a problem.</p>
                    </div>
                </div>



            </div>

            <div class="end"/>

            <Social/>
            
        </div>  
    ); 
    
};



export default About;