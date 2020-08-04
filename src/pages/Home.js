import React from 'react';

import '../App.css';
import portrait from '../assets/portrait-square.jpeg'

import Navigation from '../Navigation';
import Social from '../Social';

function Home() {
  return (
    <div className="App">
      
      <Navigation currActive={"home"}/>

      <div class="bio">
        <img class="portrait" src={portrait} alt="portrait"/>
        <div class="intro" >
          <p class="name" >Evan G.L. Scales</p>
          <p class="paragraph" >I am a third year Computer Science major at UC San Diego</p>
        </div> 
      </div>

      <Social/>
      
      <div id="about" class="temp_paragraph">
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
