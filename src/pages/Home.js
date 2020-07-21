import React from 'react';

import '../App.css';
import portrait from '../assets/portrait-square.jpeg'

import Navigation from '../Navigation';
import Social from '../Social';

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

      <Social/>

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
