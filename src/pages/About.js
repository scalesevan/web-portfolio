import React from "react";
import "../assets/stylesheets/App.css"

import Navigation from '../visible/Navigation';
import Social from '../visible/Social';

import ucsd from '../assets/images/UCSD_Seal.png';
import habitat from '../assets/images/habitat_icon.png';
import website from '../assets/images/website.png';
import swim from '../assets/images/swim.png';
import dj from '../assets/images/dj.png';
import sneaker from '../assets/images/sneaker.png';
import calc from '../assets/images/calc.png';
import autocomp from '../assets/images/autocomplete.png';
import grep from '../assets/images/grep.png';
import lifeguard from '../assets/images/lifeguard.png';
import amazon from '../assets/images/amazon.png'
import covid from '../assets/images/covid.png'

function About() {
    
    return (  
        
        <div>  

            <Navigation currActive={"about"}/>

            <div class="about-container">

                <h1 class="me">About Me</h1>

                <div class="about-me">
                    <img class="icon" src={ucsd} alt="UCSD"/>
                    <div class="desc">
                            <span class="desctitle"><b>University of California San Diego</b></span>
                            <br></br>
                            <span class="desctime">Class of 2022</span>
                            <br></br>
                            <div class="descinfo">
                                <p>I am a UCSD Graduate with a BS Degree in Computer Science.</p>
                                <p>To get to know more about me, you can see some photos that I take on Instagram or the music that I listen to on Spotify.</p>
                            </div>
                    </div>
                </div> 

                <div id="projects" class="divider nav-header"/>

                <h2>Experience</h2>
                <div class="about-me">
                <img class="icon" src={amazon} alt="AmazonIntern"/>
                    <div class="desc">
                            <span class="desctitle"><b>Amazon SDE Intern - Kindle Home Team</b></span>
                            <br></br>
                            <span class="desctime">June - September 2021</span>
                            <br></br>

                            <div class="descinfo">
                                <li>Began Devolopment on an internal service that streamlined the production of promotional campaigns;</li>
                                <li>Create fetching and filtering functionality in java along with a basic ReactJS frontend to fetch all excisting campaigns based upon filter critiera</li>
                                <li>This service will improve campaign production for several teams saving time on manual campaign review and deployment</li>
                                <li><b>Skills Used:</b> Java, React, AWS Lambda</li> 
                            </div>
                    </div>
                </div> 


                <div id="projects" class="divider nav-header"/>

                <h2 class="">Projects</h2>  

                <div class="about-me">
                    <img class="icon" src={habitat} alt="Habitat App"/>
                    <div class="desc">
                            <span class="desctitle"><b><a href="https://github.com/Skumar30/Habitat">Habitat App</a></b></span>
                            <br></br>
                            {/*<span class="desctime">Spring 2020 </span>*/}
                            <span class="demo-spacing">
                                <span class="desctime">Spring 2020</span>
                                <span class="demo-button">
                                    <a class="button" href="https://youtu.be/wb_kjh5V3AU" rel="noopener noreferrer" target="_blank">Demo Video</a>
                                </span>
                            </span>
                            <br></br>

                            <div class="descinfo">
                                <li>Created a React Native Android Application</li>
                                <li>Integrated with MongoDB and ExpressJS</li>
                                <li>This application is for habit forming with friends by completeing tasks to earn currency to buy items for your virtual pet </li>
                                <li><b>Skills Used:</b> HTML, Javascript, Databases</li> 
                            </div>
                    </div>
                </div> 

                <div class="about-me">
                    <img class="icon" src={covid} alt="COVID-19"/>
                    <div class="desc">
                            <span class="desctitle"><b>COVID-19 Grocery Price Impact Report</b></span>
                            <br></br>
                            <span class="desctime">Spring 2020</span>
                            <br></br>

                            <div class="descinfo">
                                <li>Lead a team of 5 students</li>
                                <li>Implemented in python to track grocery prices during the influx of COVID-19 case during early 2020</li>
                                <li>Gathered information in CSV format for grocery prices, cost of living, export-import activities, and Consumer Price Indexes changed during the COVID-19 outbreak </li>
                                <li><b>Skills Used:</b> Python, Machine Learning</li> 
                            </div>
                    </div>
                </div> 

                <div class="about-me">
                    <img class="icon" src={website} alt="Website"/>
                    <div class="desc">
                            <span class="desctitle"><b>This Website</b></span>
                            <br></br>
                            <span class="desctime">Summer 2020 - Present</span>
                            <br></br>

                            <div class="descinfo">
                                <li>Developed with React JS using Routing components.</li>
                                <li><b>Skills Used:</b> HTML, Javascript, CSS, ReactJS</li> 
                            </div>
                    </div>
                </div> 

                <div class="divider"/>
                
                <h2>Course Work</h2>

                <div class="about-me">
                    <img class="icon" src={autocomp} alt="Autocomplete Program"/>
                    <div class="desc">
                            <span class="desctitle"><b>Autocomplete Program</b></span>
                            <br></br>
                            <span class="desctime">Winter 2020</span>
                            <br></br>

                            <div class="descinfo">
                                <p>Used a Ternary Search Tree to create a list of completions from a dictionary file (containing words and frequencies) for a given prefix or a given string containing underscores that were to be filled. The program would then list completed words in order of greatest frequency</p>
                            </div>
                    </div>
                </div> 

                <div class="about-me">
                    <img class="icon" src={calc} alt="Calculator Program"/>
                    <div class="desc">
                            <span class="desctitle"><b>Calculator Program</b></span>
                            <br></br>
                            <span class="desctime">Spring 2019</span>
                            <br></br>

                            <div class="descinfo">
                                <p>Used multiple data structures such as binary trees, stacks, and linked lists along with polymorphic generic containers to implement a calculator that uses order of operation and a hash table that stores variables and their values to use as replacement values in calculations</p>
                            </div>
                    </div>
                </div> 

                <div class="about-me">
                    <img class="icon" src={grep} alt="Grep Program"/>
                    <div class="desc">
                            <span class="desctitle"><b>Grep Program</b></span>
                            <br></br>
                            <span class="desctime">Spring 2019</span>
                            <br></br>

                            <div class="descinfo">
                                <p>Used C and ARM assembly to create a program with functionality similar to the Unix command grep by searching files to display lines matching a pattern and flags that affect the grep result</p>
                            </div>
                    </div>
                </div> 

                <div class="divider"/>

                <h2>Extra Experience</h2>

                <div class="about-me">
                    <img class="icon" src={lifeguard} alt="lifeguard"/>
                    <div class="desc">
                            <span class="desctitle"><b>Seal Beach Lifeguard</b></span>
                            <br></br>
                            <span class="desctime">Summer 2018-2020</span>
                            <br></br>

                            <div class="descinfo">
                                <p>Worked in a team of lifeguards to concisely and effectively communicate to act on medical and safety incidents on the beach and in the water. </p>
                            </div>
                    </div>
                </div>

                <div class="divider"/>

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