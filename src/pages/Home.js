import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import '../App.css';
import portrait from '../assets/portrait-square.jpeg'
import dolf from '../assets/dolf-square.jpeg'

import Navigation from '../Navigation';

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHome } from "@fortawesome/free-solid-svg-icons";
import { fas }  from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(
  fab,
  fas,
  far,
  faInstagram,
    // more icons go here
);



function Home() {
  return (
    <div className="App">
      
      <Navigation currActive={"home"}/>

      {/*}
      <div class="menubar">
        
        <div class="header">
          <img className="logo" src={dolf} alt="dolf"/>
          <text className="title">Evan Scales</text>
        </div>
        <div class="menubar-right">
          <a class="active" href="#home">Home</a>
          
          <a href="#resume">Resume</a>          

          <div class="dropdown">
            <button class="dropbtn" href="#projects"> Projects</button>
            <div className="dropdown-content">
              <a href="#project1">Project 1</a>
              <a href="#project2">Project 2</a>
              <a href="#project3">Project 3</a>
            </div>
          </div>
          <Link to="/photo">Photo Gallery</Link>
          <a href="#about">About</a>

        </div>
      </div>
      */}

      <div class="bio">
        <img class="portrait" src={portrait} alt="portrait"/>
        <div class="paragraph">
          <p>Hello, my name is Evan! I am a third year, Computer Science major studying at UC San Diego</p>
        </div> 
      </div>

      <div className="social_footer">
        <a href="https://www.linkedin.com/in/evan-scales-cs" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon 
          icon={['fab', 'linkedin-in']}
          transform="shrink-5.5" 
          mask={['fas', 'circle']} 
          fixedWidth
          className="social"
          />
        </a>
        <a href="https://github.com/evanscales-cs" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon 
            icon={['fab', 'github']} 
            fixedWidth
            className="social"
          />
        </a>
        <a href="https://www.instagram.com/evanscales/" rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon 
          icon={['fab', 'instagram']} transform="shrink-4.5" 
          mask={['fas', 'circle']} 
          fixedWidth
          className="social"
        />
        </a>
        <a href="https://www.facebook.com/evanscalesss" rel="noopener noreferrer"target="_blank">
          <FontAwesomeIcon 
            icon={['fab', 'facebook']} 
            fixedWidth
            className="social"
          />
        </a>
        <a href="https://twitter.com/evanscaless" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon 
            icon={['fab', 'twitter']} 
            transform="shrink-5.5" 
            mask={['fas', 'circle']} 
            fixedWidth
            className="social"
          />
        </a>
        <a href="https://open.spotify.com/user/evanscales?si=OETkWOZjTSKArDtl4wvGEQ" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon 
            icon={['fab', 'spotify']} 
            className="social"
            fixedWidth
          />
        </a>
      </div>

      <div class="temp_paragraph">
        <p><b>This example demonstrates how to shrink a navigation bar when the user starts to scroll the page.</b></p>
        <p>Scroll down this frame to see the effect!</p>
        <p>Scroll to the top to remove the effect.</p>
        <p><b>Note:</b> We have also made the navbar responsive, resize the browser window to see the effect.</p>
        <p>Lorem ipsum dolor dummy text to enable scrolling, sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div> 

    </div>
    

  ); 
}

export default Home;
