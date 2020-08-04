import React from "react";
import "../App.css"

import Navigation from '../Navigation';
import Social from '../Social';

import ucsd from '../assets/UCSD_Seal.png';
import habitat from '../assets/habitat_icon.png';

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
                            <p>Lorem ipsum dolor dummy text to enable scrolling, sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                                <li>Integrated with MongoDB and Express</li>
                                <li>Skills: HTML, Javascript, Databases</li> 
                            </div>
                    </div>
                </div> 

                <h2>Projects</h2>             
                <h2>Hobbies</h2>



            </div>

            <div class="end"/>

            <Social/>
            
        </div>  
    ); 
    
};



export default About;